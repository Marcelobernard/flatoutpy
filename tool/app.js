/*
  App.js - Checklist iPad-first
  - Fluxos, captura de fotos (input file capture), armazenamento em memória (DataURLs)
  - Geração de PDF com jsPDF
  Comentários em Português, código simples e claro.
*/
(function(){
  // Elementos DOM
  const serviceBtns = Array.from(document.querySelectorAll('.service-btn'));
  const startBtn = document.getElementById('startBtn');
  const selectionSection = document.getElementById('selection');
  const checklistSection = document.getElementById('checklist');
  const doneSection = document.getElementById('done');
  const photoInput = document.getElementById('photoInput');
  const preview = document.getElementById('preview');
  const nextBtn = document.getElementById('nextBtn');
  const stepLabel = document.getElementById('stepLabel');
  const currentStepEl = document.getElementById('currentStep');
  const totalStepsEl = document.getElementById('totalSteps');
  const statusBar = document.getElementById('statusBar');
  const currentServiceEl = document.getElementById('currentService');
  const downloadPdfBtn = document.getElementById('downloadPdfBtn');
  const dateEl = document.getElementById('date');

  // Mostrar data (solo fecha para simplicidad)
  const now = new Date();
  dateEl.textContent = now.toLocaleDateString('pt-BR');
  dateEl.title = now.toLocaleString();

  // Helper para atualizações visuais do status (suporte a loading/success/error)
  function setStatus(text, state){
    statusBar.textContent = text;
    statusBar.classList.remove('loading','success','error');
    if(state) statusBar.classList.add(state);
  }

  // Definição dos fluxos e etapas (labels conforme pedido)
  const FLOWS = {
    interior_detallado: {
      title: 'Interior Detalhado',
      phases: {
        ANTES: [
          'Remover estepe e lavar',
          'Foto chão + volante',
          'Foto painel',
          'Foto bancos dianteiros pela porta do motorista',
          'Foto bancos traseiros pela porta traseira do motorista',
          'Foto porta malas',
          'Foto geral traseira até frente'
        ],
        LIMPEZA: [
          'Tapetes',
          'Painel e saídas de ar',
          'Bancos',
          'Chão',
          'Finalização interna'
        ]
      }
    },
    interior: {
      title: 'Interior',
      phases: {
        ANTES: ['Foto geral interna', 'Bancos dianteiros', 'Bancos traseiros', 'Porta-malas']
      }
    },
    exterior_detallado: {
      title: 'Exterior Detallado',
      phases: {
        ANTES: ['Foto frontal', 'Foto lateral esquerda', 'Foto lateral direita', 'Foto traseira', 'Foto capô', 'Foto teto', 'Rodas e pneus']
      }
    },
    exterior: {
      title: 'Exterior',
      phases: {
        ANTES: ['Foto frontal', 'Foto lateral', 'Foto traseira', 'Foto geral']
      }
    }
  };

  // Armazena imagens: fluxo -> fase -> array de {label,dataURL}
  const imageStore = {};

  // Fila de passos a executar (cada passo é {serviceKey, phase, stepIndex, label})
  let queue = [];
  let currentIndex = 0;

  // Prioridade: garantir que fluxos internos ocorram antes dos externos, conforme pedido
  const PRIORITY = ['interior_detallado','interior','exterior_detallado','exterior'];

  // Helper: toggle seleção de serviços com exclusividade entre detalhado/normal
  serviceBtns.forEach(btn => {
    btn.setAttribute('role', 'button');
    btn.setAttribute('aria-pressed', 'false');
    btn.addEventListener('click', ()=>{
      const key = btn.dataset.key;
      // alterna seleção atual
      const isSelected = btn.classList.toggle('selected');
      btn.setAttribute('aria-pressed', isSelected ? 'true' : 'false');

      // regras de exclusividade: se selecionar uma variante, desmarca a outra
      const conflicts = {
        exterior: ['exterior_detallado'],
        exterior_detallado: ['exterior'],
        interior: ['interior_detallado'],
        interior_detallado: ['interior']
      };

      if(isSelected && conflicts[key]){
        conflicts[key].forEach(conflictKey => {
          const other = serviceBtns.find(b => b.dataset.key === conflictKey);
          if(other && other.classList.contains('selected')){
            other.classList.remove('selected');
            other.setAttribute('aria-pressed', 'false');
          }
        });
      }
    });
  });

  startBtn.addEventListener('click', ()=>{
    const selected = serviceBtns.filter(b=>b.classList.contains('selected')).map(b=>b.dataset.key);
    if(!selected.length){
      alert('Selecione pelo menos um serviço');
      return;
    }
    buildQueue(selected);
    startChecklist();
  });

  // Construir a fila de passos: ANTES e LIMPEZA (se existir), depois DEPOIS automaticamente ao final
  function buildQueue(selected){
    queue = [];
    currentIndex = 0;

    // ordena por prioridade
    selected.sort((a,b)=>PRIORITY.indexOf(a) - PRIORITY.indexOf(b));

    // inicializa imageStore
    selected.forEach(s => {
      imageStore[s] = imageStore[s] || { ANTES: [], LIMPEZA: [], DEPOIS: [] };
    });

    // adicionar ANTES e LIMPEZA (se houver)
    selected.forEach(s => {
      const cfg = FLOWS[s];
      if(cfg && cfg.phases.ANTES){
        cfg.phases.ANTES.forEach((label, i) => queue.push({serviceKey:s, phase:'ANTES', stepIndex:i, label}));
      }
      if(cfg && cfg.phases.LIMPEZA){
        cfg.phases.LIMPEZA.forEach((label, i) => queue.push({serviceKey:s, phase:'LIMPEZA', stepIndex:i, label}));
      }
    });

    // Ao final de todos, repetir as fotos iniciais como DEPOIS (mesmos labels de ANTES)
    selected.forEach(s => {
      const cfg = FLOWS[s];
      if(cfg && cfg.phases.ANTES){
        cfg.phases.ANTES.forEach((label, i) => queue.push({serviceKey:s, phase:'DEPOIS', stepIndex:i, label}));
      }
    });

    totalStepsEl.textContent = queue.length;
    currentStepEl.textContent = 0;
  }

  function startChecklist(){
    selectionSection.classList.add('hidden');
    checklistSection.classList.remove('hidden');
    doneSection.classList.add('hidden');
    setStatus('Checklist iniciado');
    showStep(0);
  }

  function showStep(idx){
    if(idx>=queue.length){
      finishAll();
      return;
    }
    currentIndex = idx;
    const step = queue[idx];
    currentStepEl.textContent = idx+1;
    stepLabel.textContent = `${FLOWS[step.serviceKey].title} — ${step.phase}: ${step.label}`;
    currentServiceEl.textContent = `Serviço: ${FLOWS[step.serviceKey].title} • Fase: ${step.phase}`;
    preview.classList.add('hidden');
    preview.src = '';
    photoInput.value = '';
    nextBtn.disabled = true;
    totalStepsEl.textContent = queue.length;
  }

  // Quando o usuário escolhe/tira foto, mostramos preview e habilitamos o botão
  photoInput.addEventListener('change', e => {
    const f = e.target.files && e.target.files[0];
    if(!f) return;
    const reader = new FileReader();
    reader.onload = () => {
      preview.src = reader.result;
      preview.classList.remove('hidden');
      nextBtn.disabled = false;
    };
    reader.readAsDataURL(f);
  });

  // Acessibilidade: permitir ativar o campo de foto pelo teclado no label
  const takePhotoLabel = document.querySelector('.take-photo');
  if(takePhotoLabel){
    takePhotoLabel.addEventListener('keydown', (e)=>{
      if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); photoInput.click(); }
    });
  }

  // Confirmar e avançar: salva a foto em memória e vai para próximo
  nextBtn.addEventListener('click', async ()=>{
    const file = photoInput.files && photoInput.files[0];
    if(!file) return alert('Foto obrigatória para avançar.');

    // converte para dataURL (reduzido JPEG para PDF) via canvas para evitar PDFs grandes
    const dataURL = await fileToCompressedDataURL(file, 0.8, 1280);

    const step = queue[currentIndex];
    imageStore[step.serviceKey] = imageStore[step.serviceKey] || {ANTES:[], LIMPEZA:[], DEPOIS:[]};
    imageStore[step.serviceKey][step.phase][step.stepIndex] = { label: step.label, dataURL };

    setStatus(`Salvo: ${step.label}`);

    showStep(currentIndex + 1);
  });

  // Converter arquivo para DataURL redimensionado (para reduzir tamanho do PDF)
  function fileToCompressedDataURL(file, quality = 0.8, maxDim = 1280){
    return new Promise((resolve)=>{
      const img = new Image();
      const reader = new FileReader();
      reader.onload = () => {
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let { width, height } = img;
          const ratio = width / height;
          if(width > height){
            if(width > maxDim){ width = maxDim; height = Math.round(maxDim/ratio); }
          } else {
            if(height > maxDim){ height = maxDim; width = Math.round(maxDim*ratio); }
          }
          canvas.width = width; canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          const compressed = canvas.toDataURL('image/jpeg', quality);
          resolve(compressed);
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
  }

  // Fim da fila: gerar PDF automaticamente e mostrar botão de download
  async function finishAll(){
    checklistSection.classList.add('hidden');
    doneSection.classList.remove('hidden');
    setStatus('Gerando PDF...', 'loading');

    const pdfBlob = await generatePDF();
    setStatus('Completado', 'success');

    // Salva referência para ações futuras (compartilhar)
    lastPdfBlob = pdfBlob;

    // Cria URL para download local
    const url = URL.createObjectURL(pdfBlob);
    downloadPdfBtn.onclick = ()=>{
      const a = document.createElement('a');
      a.href = url; a.download = `checklist_${(new Date()).toISOString().slice(0,19)}.pdf`;
      a.click();
    };


    // Auto-download
    downloadPdfBtn.click();
    statusBar.textContent = 'Completado';
  }

  // Cria placeholder para testes (top-level, reutilizável)
  function createPlaceholder(text, bg = '#333', w = 1200, h = 800){
    const c = document.createElement('canvas'); c.width = w; c.height = h;
    const ctx = c.getContext('2d');
    ctx.fillStyle = bg; ctx.fillRect(0,0,w,h);
    ctx.fillStyle = '#fff'; ctx.font = 'bold 120px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(text, w/2, h/2);
    return c.toDataURL('image/jpeg', 0.9);
  }

  // Gerador de PDF de teste acionável a partir da UI (top-level)
  async function generateTestPdfGlobal(){
    // limpa e popula imageStore com dados de teste
    for(const k in imageStore) delete imageStore[k];
    imageStore['interior_detallado'] = { ANTES: [], LIMPEZA: [], DEPOIS: [] };
    imageStore['interior_detallado'].ANTES[0] = { label: 'Quitar la rueda de repuesto y lavar', dataURL: createPlaceholder('ANTES 1', '#444') };
    imageStore['interior_detallado'].DEPOIS[0] = { label: 'Quitar la rueda de repuesto y lavar (DESPUÉS)', dataURL: createPlaceholder('DESPUÉS 1', '#1a5') };
    imageStore['interior_detallado'].ANTES[1] = { label: 'Foto suelo y volante', dataURL: createPlaceholder('ANTES 2', '#333') };

      setStatus('Gerando PDF de teste...', 'loading');
      const blob = await generatePDF();
      lastPdfBlob = blob;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href = url; a.download = `checklist_prueba_${(new Date()).toISOString().slice(0,19)}.pdf`; a.click();
      setStatus('PDF de teste gerado', 'success');
  }

  // Guarda último PDF gerado para ações como compartilhar
  let lastPdfBlob = null;

  // Vincula o botão de teste estático que foi inserido em HTML
  const testPdfStaticBtn = document.getElementById('testPdfBtn');
  if(testPdfStaticBtn) testPdfStaticBtn.addEventListener('click', generateTestPdfGlobal);


  // Geração do PDF com jsPDF
  async function generatePDF(){
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ unit: 'mm', format: 'a4' });
    const margin = 15; let y = 15;

    // Cabeçalho: logo (img/LOGO.png) e info
    pdf.setFontSize(14);
    pdf.setTextColor(0,0,0);

    // Tenta carregar o logo do projeto a partir de possíveis caminhos (relativo a esta página)
    try{
      const candidates = [
        new URL('../img/LOGO.png', window.location.href).href, // indo um nível acima (tool/ -> /)
        new URL('/img/LOGO.png', window.location.href).href,   // caminho absoluto do site
        new URL('img/LOGO.png', window.location.href).href    // caminho relativo à mesma pasta
      ];
      let logoDataURL = null;
      for(const c of candidates){
        logoDataURL = await loadImageDataURL(c);
        if(logoDataURL) break;
      }

      if(logoDataURL){
        try{
          // largura 24mm, altura 12mm para boa visibilidade
          pdf.addImage(logoDataURL, 'PNG', margin, y, 18, 18);
        }catch(e){
          pdf.setFillColor(16,23,36);
          pdf.rect(margin, y, 20, 12, 'F');
          pdf.setTextColor(255,255,255);
          pdf.text(' F', margin+5, y+9);
        }
      } else {
        pdf.setFillColor(16,23,36);
        pdf.rect(margin, y, 20, 12, 'F');
        pdf.setTextColor(255,255,255);
        pdf.text(' F', margin+5, y+9);
      }
    }catch(e){
      // fallback silencioso
      pdf.setFillColor(16,23,36);
      pdf.rect(margin, y, 20, 12, 'F');
      pdf.setTextColor(255,255,255);
      pdf.text(' F', margin+5, y+9);
    }

    pdf.setTextColor(0,0,0);
    pdf.setFontSize(16);
    // Título en español
    pdf.text('Documentación — FLATOUTPY', margin+26, y+9);

    pdf.setFontSize(10);
    pdf.setTextColor(100);
    // Fecha en formato local (sólo fecha, sin hora) en español
    pdf.text(`Fecha: ${(new Date()).toLocaleDateString('es-ES')}`, margin+26, y+16);

    y += 22;

    // Serviços selecionados
    const selectedServices = Object.keys(imageStore).filter(k=>Object.values(imageStore[k]).some(arr=>arr.length>0));
    pdf.setFontSize(12);
    pdf.setTextColor(0,0,0);
    pdf.text('Servicios: ' + selectedServices.map(k=>FLOWS[k].title).join(' • '), margin, y);
    y += 8;

    // Seção Comparação ANTES x DEPOIS — renderiza lado a lado por etapa
    // Para cada serviço, percorre o número máximo de etapas entre ANTES/DEPOIS
    for(const s of selectedServices){
      pdf.setFontSize(12); pdf.setTextColor(0); pdf.text(`${FLOWS[s].title} — ANTES / DESPUÉS`, margin, y); y += 8;
      const antes = imageStore[s].ANTES || [];
      const depois = imageStore[s].DEPOIS || [];
      const maxSteps = Math.max(antes.length, depois.length);

      for(let i=0;i<maxSteps;i++){
        const beforeItem = antes[i] || null;
        const afterItem = depois[i] || null;
        // Se nenhum dos dois existir, pula
        if(!beforeItem && !afterItem) continue;
        // adiciona linha de duas imagens lado a lado
        y = await addSideBySideImagesToPdf(pdf,
          beforeItem ? beforeItem.dataURL : null,
          afterItem ? afterItem.dataURL : null,
          beforeItem ? beforeItem.label : '—',
          afterItem ? afterItem.label : '—',
          margin,
          y
        );
      }

      // espaço entre serviços
      y += 6;
      // checar página
      if(y > 270){ pdf.addPage(); y = 20; }
    }

    // helper para carregar dataURL a partir de uma URL (por exemplo 'img/LOGO.png')
    function loadImageDataURL(url){
      return new Promise((res)=>{
        if(!url) return res(null);
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = ()=>{
          try{
            const canvas = document.createElement('canvas');
            canvas.width = img.naturalWidth; canvas.height = img.naturalHeight;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            res(canvas.toDataURL('image/png'));
          }catch(e){
            res(null);
          }
        };
        img.onerror = ()=> res(null);
        img.src = url;
      });
    }

    // WhatsApp sharing removed.


    // Upload helpers removed (file.io no longer used for sharing from web).

    // Upload helpers removed (transfer.sh no longer used).

    // helper para carregar dimensões de imagem
    function loadImageSize(dataURL){
      return new Promise((res)=>{
        if(!dataURL) return res(null);
        const img = new Image();
        img.onload = ()=> res({w: img.naturalWidth, h: img.naturalHeight});
        img.onerror = ()=> res(null);
        img.src = dataURL;
      });
    }

    // Adiciona duas imagens lado a lado (ANTES | DEPOIS). Retorna novo y
    async function addSideBySideImagesToPdf(pdf, beforeDataURL, afterDataURL, beforeCaption, afterCaption, margin, yPos){
      const pageWidth = 210; const pageHeight = 297; const bottomMargin = 20;
      const usableWidth = pageWidth - margin*2; const gap = 6;
      const colW = (usableWidth - gap) / 2; // largura disponível por coluna (mm)

      // Cabeçalhos das colunas (ANTES | DEPOIS)
      const headerH = 8; const captionH = 6; const minRowH = 40;
      // quebra de página se necessário para cabeçalho + imagem mínima
      if(yPos + headerH + minRowH + captionH + 10 > pageHeight - bottomMargin){ pdf.addPage(); yPos = 20; }

      const leftX = margin;
      const rightX = margin + colW + gap;

      // desenha cabeçalhos das colunas centralizados (español)
      pdf.setFontSize(10); pdf.setFont(undefined, 'bold'); pdf.setTextColor(0);
      pdf.text('ANTES', leftX + colW/2, yPos + 6, { align: 'center' });
      pdf.text('DESPUÉS', rightX + colW/2, yPos + 6, { align: 'center' });
      // divisor vertical sutil
      pdf.setDrawColor(200); pdf.setLineWidth(0.3);
      pdf.line(margin + colW + gap/2, yPos - 2, margin + colW + gap/2, yPos + headerH + minRowH + captionH + 6);

      // Avança o cursor para onde as imagens serão desenhadas
      let imgY = yPos + headerH + 2;

      // Carrega tamanhos naturais
      const [bSize, aSize] = await Promise.all([loadImageSize(beforeDataURL), loadImageSize(afterDataURL)]);

      // calcula proporções (em mm) usando coluna como referência
      let bW = 0, bH = 0, aW = 0, aH = 0;
      if(bSize){ bW = colW; bH = (bSize.h / bSize.w) * bW; }
      if(aSize){ aW = colW; aH = (aSize.h / aSize.w) * aW; }

      // Limite máximo de altura por linha (para caber bem na página A4)
      const maxRowH = 90; // mm
      const maxImgH = Math.max(bH || 0, aH || 0);
      if(maxImgH > maxRowH){
        const scale = maxRowH / maxImgH;
        bW = bW * scale; bH = bH * scale;
        aW = aW * scale; aH = aH * scale;
      }

      const rowH = Math.max(bH || 0, aH || 0, minRowH); // altura reservada para imagens

      // Desenha a imagem da esquerda (ANTES)
      if(beforeDataURL){
        try{
          const beforeType = beforeDataURL.startsWith('data:image/png') ? 'PNG' : 'JPEG';
          // centraliza verticalmente na área reservada (se a altura for menor que rowH, coloca no topo com pequeno padding)
          const bTop = imgY + Math.max(0, (rowH - bH) / 2);
          pdf.addImage(beforeDataURL, beforeType, leftX, bTop, bW, bH);
        }catch(e){ pdf.setFontSize(10); pdf.setTextColor(120); pdf.text('[Imagen no cargada]', leftX, imgY + 6); }
      } else {
        pdf.setFontSize(10); pdf.setTextColor(120); pdf.text('Sin foto', leftX + 6, imgY + 10);
      }

      // Desenha a imagem da direita (DESPUÉS)
      if(afterDataURL){
        try{
          const afterType = afterDataURL.startsWith('data:image/png') ? 'PNG' : 'JPEG';
          const aTop = imgY + Math.max(0, (rowH - aH) / 2);
          pdf.addImage(afterDataURL, afterType, rightX, aTop, aW, aH);
        }catch(e){ pdf.setFontSize(10); pdf.setTextColor(120); pdf.text('[Imagen no cargada]', rightX, imgY + 6); }
      } else {
        pdf.setFontSize(10); pdf.setTextColor(120); pdf.text('Sin foto', rightX + 6, imgY + 10);
      }

      // legendas (ajustar cor e tamanho)
      pdf.setFont(undefined, 'normal'); pdf.setFontSize(9); pdf.setTextColor(80);
      if(beforeCaption) pdf.text(beforeCaption, leftX, imgY + rowH + 4, {maxWidth: colW});
      if(afterCaption) pdf.text(afterCaption, rightX, imgY + rowH + 4, {maxWidth: colW});

      // retorna novo y posicionando após a legenda
      return yPos + headerH + rowH + captionH + 8;
    }

    // (Removed inner dev-only helpers here to expose a single top-level test generator)

    // Adiciona botão de teste na UI (dev-only) — caso a função generatePDF seja chamada já, garante listener
    try{
      let testBtn = document.getElementById('testPdfBtn');
      if(!testBtn){
        testBtn = document.createElement('button');
        testBtn.id = 'testPdfBtn';
        testBtn.textContent = 'Gerar PDF de Teste';
        testBtn.style.marginTop = '8px'; testBtn.style.background = '#444'; testBtn.style.color = '#fff';
        const actions = selectionSection.querySelector('.actions');
        if(actions) actions.appendChild(testBtn);
      }
      // connect to top-level test generator (defined outside)
      testBtn.addEventListener('click', generateTestPdfGlobal);
    }catch(e){ /* silencioso se DOM não disponível */ }

    // Retorna Blob para download
    const blob = pdf.output('blob');
    return blob;

    // Função helper: renderiza seção e adiciona uma nova página se necessário
    async function renderSection(pdf, sectionTitle, margin, renderFn){
      pdf.setFontSize(14); pdf.setTextColor(0); pdf.text(sectionTitle, margin, y); y += 6;
      renderFn();
    }

    // Adiciona imagem e legenda ao PDF, retorna novo y
    function addImageToPdf(pdf, dataURL, caption, margin, yPos, maxWmm){
      // Calcula proporção para caber na largura
      const img = new Image();
      img.src = dataURL;
      // Tamanho aprox (mm) => assumimos 96dpi 1px ~ 0.264583 mm; mas melhor escalar por pixel ratio
      // Usaremos uma abordagem simples: carregar e calcular proporção via canvas
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      // draw via temp image sync is tricky, use naturalWidth/naturalHeight after loaded
      // Para simplicidade, tentamos adicionar imagem com width maxWmm
      const imgProps = { width: 120, height: 80 };

      // Se espaço vertical insuficiente, cria nova página
      const pageHeight = 297; // A4
      if(yPos + 60 > pageHeight - 20){ pdf.addPage(); yPos = 20; }

      const w = Math.min(maxWmm, 170 - margin*2);
      const h = (w * imgProps.height) / imgProps.width || 60;
      try{ pdf.addImage(dataURL, 'JPEG', margin, yPos, w, h); }catch(e){
        // fallback: apenas texto
        pdf.setFontSize(10); pdf.text('[Imagem não carregada]', margin, yPos+6);
      }
      yPos += h + 4;
      pdf.setFontSize(9); pdf.setTextColor(80); pdf.text(caption, margin, yPos);
      yPos += 8;
      return yPos;
    }
  }

  // Pequenina ajuda para abrir a página rapidamente (console)
  console.log('Checklist app pronto. Abra checklist.html no navegador (iPad preferencial).');
})();