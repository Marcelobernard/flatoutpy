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
      title: 'Limpieza Interior Detallada',
      phases: {
        ANTES: [
          'Retirar la rueda de auxilio y lavar',
          'Foto del piso y volante',
          'Foto del tablero',
          'Foto de los asientos delanteros desde la puerta del conductor',
          'Foto de los asientos traseros desde la puerta trasera del conductor',
          'Foto del baúl',
          'Foto general desde la parte trasera hasta el frente'
        ],
        LIMPIEZA: [
          'Alfombras',
          'Tablero y salidas de aire',
          'Asientos',
          'Piso',
          'Finalización interior'
        ]
      }
    },
    interior: {
      title: 'Limpieza Interior',
      phases: {
        ANTES: [
          'Foto general del interior',
          'Asientos delanteros',
          'Asientos traseros',
          'Baúl'
        ]
      }
    },
    exterior_detallado: {
      title: 'Limpieza Exterior Detallada',
      phases: {
        ANTES: [
          'Foto frontal',
          'Foto lateral izquierda',
          'Foto lateral derecha',
          'Foto trasera',
          'Foto del capó',
          'Foto del techo',
          'Ruedas y neumáticos'
        ]
      }
    },
    exterior: {
      title: 'Limpieza Exterior',
      phases: {
        ANTES: [
          'Foto frontal',
          'Foto lateral',
          'Foto trasera',
          'Foto general'
        ]
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

    // Remove chaves antigas do imageStore que não fazem parte da seleção atual
    Object.keys(imageStore).forEach(k => {
      if(!selected.includes(k)) delete imageStore[k];
    });

    // inicializa/normaliza imageStore apenas para os serviços selecionados
    selected.forEach(s => {
      imageStore[s] = {
        ANTES: (imageStore[s] && imageStore[s].ANTES) ? imageStore[s].ANTES : [],
        LIMPEZA: (imageStore[s] && imageStore[s].LIMPEZA) ? imageStore[s].LIMPEZA : [],
        DEPOIS: (imageStore[s] && imageStore[s].DEPOIS) ? imageStore[s].DEPOIS : []
      };
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
  // Pergunta opcional pelo veículo antes de gerar o PDF
  function askForVehicleInfo(){
    return new Promise((resolve)=>{
      // cria modal leve
      const modal = document.createElement('div');
      modal.id = 'vehicleModal';
      modal.tabIndex = -1;
      modal.style = 'position:fixed;left:0;top:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.45);z-index:9999;';
      modal.innerHTML = `
        <div style="background:#fff;padding:16px;border-radius:8px;max-width:360px;width:90%;box-shadow:0 8px 24px rgba(0,0,0,0.2);">
          <h3 style="margin:0 0 8px 0;font-size:16px">Información opcional del vehículo</h3>
          <p style="margin:0 0 12px 0;color:#555;font-size:13px">Rellene la placa y/o modelo para incluirlos en la primera página del PDF (opcional).</p>
          <div style="display:flex;gap:8px;margin-bottom:8px">
            <input id="vehiclePlateInput" placeholder="Placa (ej: ABC123)" style="flex:1;padding:8px;border:1px solid #ccc;border-radius:4px" />
            <input id="vehicleModelInput" placeholder="Carro (ej: Toyota Corolla)" style="flex:2;padding:8px;border:1px solid #ccc;border-radius:4px" />
          </div>
          <div style="display:flex;gap:8px;justify-content:flex-end">
            <button id="vehicleSkipBtn" style="background:#eee;padding:8px 10px;border-radius:4px;border:0">Pular</button>
            <button id="vehicleSaveBtn" style="background:#007bff;color:#fff;padding:8px 10px;border-radius:4px;border:0">Adicionar</button>
          </div>
        </div>`;
      document.body.appendChild(modal);
      const plateInput = modal.querySelector('#vehiclePlateInput');
      const modelInput = modal.querySelector('#vehicleModelInput');
      plateInput.focus();
      function cleanAndResolve(obj){ document.body.removeChild(modal); resolve(obj); }
      modal.querySelector('#vehicleSaveBtn').addEventListener('click', ()=>{
        const placa = (plateInput.value || '').trim();
        const carro = (modelInput.value || '').trim();
        cleanAndResolve({ placa: placa ? placa.toUpperCase().replace(/\s+/g,'') : '', carro: carro || '' });
      });
      modal.querySelector('#vehicleSkipBtn').addEventListener('click', ()=> cleanAndResolve({}));
      modal.addEventListener('keydown', e=>{ if(e.key === 'Escape') cleanAndResolve({}); if(e.key === 'Enter'){ modal.querySelector('#vehicleSaveBtn').click(); }});
    });
  }

  async function finishAll(){
    checklistSection.classList.add('hidden');
    doneSection.classList.remove('hidden');

    // pergunta opcional antes de gerar o PDF
    const vehicleInfo = await askForVehicleInfo();

    setStatus('Gerando PDF...', 'loading');

    const pdfBlob = await generatePDF(vehicleInfo);
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
    // preserva o estado atual e usa dados de teste temporários para não poluir imageStore
    const prev = JSON.parse(JSON.stringify(imageStore));
    try{
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
    }finally{
      // restaura o imageStore anterior
      for(const k in imageStore) delete imageStore[k];
      Object.keys(prev).forEach(k => { imageStore[k] = prev[k]; });
    }
  }

  // Guarda último PDF gerado para ações como compartilhar
  let lastPdfBlob = null;

  // Vincula o botão de teste estático que foi inserido em HTML
  const testPdfStaticBtn = document.getElementById('testPdfBtn');
  if(testPdfStaticBtn) testPdfStaticBtn.addEventListener('click', generateTestPdfGlobal);


  // Geração do PDF com jsPDF
  async function generatePDF(vehicleInfo = {}){
    // Objetivo: manter a lógica existente, mas melhorar visual e estrutura do PDF
    // - Adiciona capa
    // - Cabeçalho e rodapé fixos (exceto capa)
    // - Tipografia (Helvetica), bordas nas imagens, espaçamento maior
    // - Seções por serviço com separador visual

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ unit: 'mm', format: 'a4' });
    const pageWidth = 210; const pageHeight = 297;
    const margin = 15;

    // Fonte: usar Helvetica (padrão do jsPDF)
    pdf.setFont('helvetica');

    // Helpers reutilizáveis dentro da função
    function formatDate(){ return (new Date()).toLocaleDateString('es-ES'); }

    // Helper para carregar dataURL a partir de uma URL (por exemplo 'img/LOGO.png')
    async function loadImageDataURL(url){
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

    // Helper para carregar dimensões de imagem
    function loadImageSize(dataURL){
      return new Promise((res)=>{
        if(!dataURL) return res(null);
        const img = new Image();
        img.onload = ()=> res({w: img.naturalWidth, h: img.naturalHeight});
        img.onerror = ()=> res(null);
        img.src = dataURL;
      });
    }

    // Tenta carregar logo (mesma lógica anterior, encapsulada)
    async function findLogo(){
      const candidates = [
        new URL('../img/logob.png', window.location.href).href,
        new URL('/img/logob.png', window.location.href).href,
        new URL('img/logob.png', window.location.href).href
      ];
      for(const c of candidates){
        const d = await loadImageDataURL(c);
        if(d) return d;
      }
      return null;
    }

    // --- 1) CAPA (primeira página) ---
    // Construir capa limpa e corporativa sem fotos
    pdf.setFillColor(255,255,255);
    pdf.rect(0,0,pageWidth,pageHeight,'F');

    const logoDataURL = await findLogo();
    // Logo no topo center-left
    if(logoDataURL){
      try{ pdf.addImage(logoDataURL, 'PNG', margin, 18, 180, 14); }catch(e){}
    }

    // Título grande centralizado
    pdf.setFontSize(28); pdf.setFont(undefined, 'bold'); pdf.setTextColor(20);
    pdf.text('Documentación del Servicio', pageWidth/2, 110, { align: 'center' });

    // Subtítulo / data
    pdf.setFontSize(11); pdf.setFont(undefined, 'normal'); pdf.setTextColor(100);
    pdf.text(`Fecha: ${formatDate()}`, pageWidth/2, 122, { align: 'center' });

    // Información del vehículo (opcional) — aparece en la primera página si fue provisto
    let listY = 140;
    if(vehicleInfo && (vehicleInfo.carro || vehicleInfo.placa)){
      let vehText = '';
      if(vehicleInfo.carro && vehicleInfo.placa) vehText = `Vehículo: ${vehicleInfo.carro} - ${String(vehicleInfo.placa).toUpperCase()}`;
      else if(vehicleInfo.placa) vehText = `Placa: ${String(vehicleInfo.placa).toUpperCase()}`;
      else if(vehicleInfo.carro) vehText = `Vehículo: ${vehicleInfo.carro}`;
      pdf.setFontSize(12); pdf.setFont(undefined, 'normal'); pdf.setTextColor(40);
      pdf.text(vehText, pageWidth/2, 132, { align: 'center' });
      listY = 150;
    }

    // Lista de servicios
    const selectedServices = Object.keys(imageStore).filter(k=>Object.values(imageStore[k]).some(arr=>arr.length>0));
    pdf.setFontSize(12); pdf.setTextColor(40); pdf.setFont(undefined, 'normal');
    const servicesText = selectedServices.map(k=>`• ${FLOWS[k].title}`).join('\n');
    // Imprimir a lista centralizada em bloco
    const listX = pageWidth/2;
    selectedServices.forEach((k,i)=>{
      pdf.text(`• ${FLOWS[k].title}`, listX, listY + (i*8), { align: 'center' });
    });

    // Espaço para identidade (opcional)
    pdf.setFontSize(10); pdf.setTextColor(120);
    pdf.text('FLATOUTPY — Documentación profesional', pageWidth/2, 200, { align: 'center' });

    // Adiciona nova página para o conteúdo (conteúdo terá header/footer)
    pdf.addPage();

    // Espaços reservados para header/rodapé
    const headerH = 14; const footerH = 12;
    let y = margin + headerH + 4;

    // --- helpers para header e footer (serão aplicados em todas as páginas depois de gerar conteúdo) ---
    async function drawHeader(pageNumber){
      pdf.setPage(pageNumber);
      // fundo branco para garantir limpeza
      pdf.setFillColor(255,255,255);
      pdf.rect(0, 0, pageWidth, margin + headerH, 'F');

      // logo pequeno à esquerda
      if(logoDataURL){
        try{ pdf.addImage(logoDataURL, 'PNG', margin, 8, 48, 12); }catch(e){}
      } else {
        // bloco simples quando não há logo
        pdf.setFillColor(20,20,20); pdf.rect(margin, 8, 12, 12, 'F');
      }

      // Nome da empresa à direita
      pdf.setFontSize(11); pdf.setFont(undefined, 'bold'); pdf.setTextColor(30);
      pdf.text('FLATOUTPY', pageWidth - margin, 16, { align: 'right' });

      // linha divisória
      pdf.setDrawColor(200); pdf.setLineWidth(0.5);
      pdf.line(margin, margin + headerH - 2, pageWidth - margin, margin + headerH - 2);
    }

    function drawFooter(pageNumber, totalPages){
      pdf.setPage(pageNumber);
      pdf.setFontSize(9); pdf.setFont(undefined, 'normal'); pdf.setTextColor(110);
      // linha sutil acima do rodapé
      pdf.setDrawColor(230); pdf.setLineWidth(0.5);
      pdf.line(margin, pageHeight - margin - footerH + 6, pageWidth - margin, pageHeight - margin - footerH + 6);

      // data à esquerda
      pdf.text(`Fecha: ${formatDate()}`, margin, pageHeight - margin - footerH + 2);
      // paginação à direita (em espanhol)
      pdf.text(`Página ${pageNumber} de ${totalPages}`, pageWidth - margin, pageHeight - margin - footerH + 2, { align: 'right' });
    }

    // --- 4) Layout das fotos: ANTES | DESPUÉS (mantém lógica) ---
    // Função revisada para adicionar duas imagens lado a lado com bordas e melhor espaçamento
    async function addSideBySideImagesToPdf_refined(pdf, beforeDataURL, afterDataURL, beforeCaption, afterCaption, margin, yPos){
      const usableWidth = pageWidth - margin*2; const gap = 8; // gap aumentado
      const colW = (usableWidth - gap) / 2; // largura por coluna (mm)

      const headerH = 8; const captionH = 6; const minRowH = 48; // row min aumentado para mais espaço

      // Quebra de página se necessário (respeitando footer)
      if(yPos + headerH + minRowH + captionH + footerH > pageHeight - margin){ pdf.addPage(); yPos = margin + headerH + 4; }

      const leftX = margin;
      const rightX = margin + colW + gap;

      // Cabeçalhos das colunas
      pdf.setFontSize(10); pdf.setFont(undefined, 'bold'); pdf.setTextColor(0);
      pdf.text('ANTES', leftX + colW/2, yPos + 6, { align: 'center' });
      pdf.text('DESPUÉS', rightX + colW/2, yPos + 6, { align: 'center' });

      // divisor vertical sutil
      pdf.setDrawColor(220); pdf.setLineWidth(0.3);
      pdf.line(margin + colW + gap/2, yPos - 2, margin + colW + gap/2, yPos + headerH + minRowH + captionH + 10);

      // Posicionamento da área de imagem
      let imgY = yPos + headerH + 3;

      // Carrega tamanhos naturais
      const [bSize, aSize] = await Promise.all([loadImageSize(beforeDataURL), loadImageSize(afterDataURL)]);

      // Calcula proporções usando coluna como referência
      let bW = 0, bH = 0, aW = 0, aH = 0;
      if(bSize){ bW = colW; bH = (bSize.h / bSize.w) * bW; }
      if(aSize){ aW = colW; aH = (aSize.h / aSize.w) * aW; }

      // Ajuste de escala máximo
      const maxRowH = 110; // aumentado para mais espaço
      const maxImgH = Math.max(bH || 0, aH || 0);
      if(maxImgH > maxRowH){ const scale = maxRowH / maxImgH; bW *= scale; bH *= scale; aW *= scale; aH *= scale; }

      const rowH = Math.max(bH || 0, aH || 0, minRowH);

      // Desenhar borda leve ao redor das áreas de imagem para aparência premium
      pdf.setDrawColor(180); pdf.setLineWidth(0.5);

      // Imagem esquerda
      if(beforeDataURL){
        try{
          const beforeType = beforeDataURL.startsWith('data:image/png') ? 'PNG' : 'JPEG';
          const bTop = imgY + Math.max(0, (rowH - bH) / 2);
          pdf.addImage(beforeDataURL, beforeType, leftX, bTop, bW, bH);
          // Borda ao redor da imagem
          pdf.rect(leftX - 0.8, bTop - 0.8, bW + 1.6, bH + 1.6);
        }catch(e){ pdf.setFontSize(10); pdf.setTextColor(120); pdf.text('[Imagen no cargada]', leftX, imgY + 6); }
      } else { pdf.setFontSize(10); pdf.setTextColor(130); pdf.text('Sin foto', leftX + 6, imgY + 10); }

      // Imagem direita
      if(afterDataURL){
        try{
          const afterType = afterDataURL.startsWith('data:image/png') ? 'PNG' : 'JPEG';
          const aTop = imgY + Math.max(0, (rowH - aH) / 2);
          pdf.addImage(afterDataURL, afterType, rightX, aTop, aW, aH);
          pdf.rect(rightX - 0.8, aTop - 0.8, aW + 1.6, aH + 1.6);
        }catch(e){ pdf.setFontSize(10); pdf.setTextColor(120); pdf.text('[Imagen no cargada]', rightX, imgY + 6); }
      } else { pdf.setFontSize(10); pdf.setTextColor(130); pdf.text('Sin foto', rightX + 6, imgY + 10); }

      // Legendas (tipografia consistente)
      pdf.setFont(undefined, 'normal'); pdf.setFontSize(9); pdf.setTextColor(110);
      if(beforeCaption) pdf.text(beforeCaption, leftX, imgY + rowH + 6, {maxWidth: colW});
      if(afterCaption) pdf.text(afterCaption, rightX, imgY + rowH + 6, {maxWidth: colW});

      // Retorna nova posição Y com maior espaçamento vertical
      return yPos + headerH + rowH + captionH + 14;
    }

    // --- 6) Organização: uma seção por serviço com separador visual ---
    const services = selectedServices;
    for(const s of services){
      // Verifica se há espaço para título de seção, caso contrário, nova página
      if(y + 20 > pageHeight - margin - footerH){ pdf.addPage(); y = margin + headerH + 4; }

      // Título da seção (12-13 bold, em espanhol)
      pdf.setFontSize(13); pdf.setFont(undefined, 'bold'); pdf.setTextColor(10);
      pdf.text(`${FLOWS[s].title}`, margin, y);
      y += 8;

      // Subtítulo comparativo
      pdf.setFontSize(11); pdf.setFont(undefined, 'normal'); pdf.setTextColor(80);
      pdf.text('ANTES / DESPUÉS', margin, y);
      y += 6;

      const antes = imageStore[s].ANTES || [];
      const depois = imageStore[s].DEPOIS || [];
      const maxSteps = Math.max(antes.length, depois.length);

      for(let i=0;i<maxSteps;i++){
        const beforeItem = antes[i] || null;
        const afterItem = depois[i] || null;
        if(!beforeItem && !afterItem) continue;
        y = await addSideBySideImagesToPdf_refined(pdf,
          beforeItem ? beforeItem.dataURL : null,
          afterItem ? afterItem.dataURL : null,
          beforeItem ? beforeItem.label : '—',
          afterItem ? afterItem.label : '—',
          margin,
          y
        );
      }

      // Sepador visual entre serviços
      y += 6;
      pdf.setDrawColor(220); pdf.setLineWidth(0.6);
      pdf.line(margin, y, pageWidth - margin, y);
      y += 10;

      // Se necessidade de nova página por falta de espaço
      if(y > pageHeight - margin - footerH - 20){ pdf.addPage(); y = margin + headerH + 4; }
    }

    // --- 2) e 3) Cabeçalho e Rodapé fixos: aplicar em todas as páginas exceto a capa ---
    const totalPages = pdf.getNumberOfPages();
    // A capa é página 1, então começamos em 2
    for(let p = 2; p <= totalPages; p++){
      // Desenha header e footer em cada página de conteúdo
      // (drawHeader pode ser async devido ao logo, mas logo já carregada)
      await drawHeader(p);
      drawFooter(p, totalPages);
    }

    // Botão de teste dev (mantêm compatibilidade com o resto do app)
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
      testBtn.removeEventListener('click', generateTestPdfGlobal);
      testBtn.addEventListener('click', generateTestPdfGlobal);
    }catch(e){ /* silencioso se DOM não disponível */ }

    // Retorna Blob para download
    const blob = pdf.output('blob');
    return blob;

    // --- OBS: Não removi helpers auxiliares (loadImageDataURL, loadImageSize) existentes — eles ficam disponíveis e são usados acima ---
  }

  // Pequenina ajuda para abrir a página rapidamente (console)
  console.log('Checklist app pronto. Abra checklist.html no navegador (iPad preferencial).');
})();