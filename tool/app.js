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

  // Mostrar data
  dateEl.textContent = new Date().toLocaleString();

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

  // Helper: toggle seleção de serviços
  serviceBtns.forEach(btn => {
    btn.addEventListener('click', ()=>{
      btn.classList.toggle('selected');
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
    statusBar.textContent = 'Checklist iniciado';
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

  // Confirmar e avançar: salva a foto em memória e vai para próximo
  nextBtn.addEventListener('click', async ()=>{
    const file = photoInput.files && photoInput.files[0];
    if(!file) return alert('Foto obrigatória para avançar.');

    // converte para dataURL (reduzido JPEG para PDF) via canvas para evitar PDFs grandes
    const dataURL = await fileToCompressedDataURL(file, 0.8, 1280);

    const step = queue[currentIndex];
    imageStore[step.serviceKey] = imageStore[step.serviceKey] || {ANTES:[], LIMPEZA:[], DEPOIS:[]};
    imageStore[step.serviceKey][step.phase][step.stepIndex] = { label: step.label, dataURL };

    statusBar.textContent = `Salvo: ${step.label}`;

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
    statusBar.textContent = 'Gerando PDF...';

    const pdfBlob = await generatePDF();

    // Cria URL para download local
    const url = URL.createObjectURL(pdfBlob);
    downloadPdfBtn.onclick = ()=>{
      const a = document.createElement('a');
      a.href = url; a.download = `checklist_${(new Date()).toISOString().slice(0,19)}.pdf`;
      a.click();
    };

    // Auto-download
    downloadPdfBtn.click();
    statusBar.textContent = 'Concluído';
  }

  // Geração do PDF com jsPDF
  async function generatePDF(){
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ unit: 'mm', format: 'a4' });
    const margin = 15; let y = 15;

    // Cabeçalho: logo simples (retângulo) e info
    pdf.setFontSize(14);
    pdf.setTextColor(0,0,0);
    // Desenha um bloco escuro como 'logo' e o título
    pdf.setFillColor(16,23,36);
    pdf.rect(margin, y, 20, 12, 'F');
    pdf.setTextColor(255,255,255);
    pdf.text(' F', margin+5, y+9);

    pdf.setTextColor(0,0,0);
    pdf.setFontSize(16);
    pdf.text('Checklist Detalhado — FlatOut', margin+26, y+9);

    pdf.setFontSize(10);
    pdf.setTextColor(100);
    pdf.text(`Data: ${(new Date()).toLocaleString()}`, margin+26, y+16);

    y += 22;

    // Serviços selecionados
    const selectedServices = Object.keys(imageStore).filter(k=>Object.values(imageStore[k]).some(arr=>arr.length>0));
    pdf.setFontSize(12);
    pdf.setTextColor(0,0,0);
    pdf.text('Serviços: ' + selectedServices.map(k=>FLOWS[k].title).join(' • '), margin, y);
    y += 8;

    // Seção ANTES e DEPOIS
    await renderSection(pdf, 'ANTES', margin, () => {
      // percorrer services e suas imagens ANTES
      selectedServices.forEach(s => {
        const arr = imageStore[s].ANTES || [];
        if(arr && arr.length){
          pdf.setFontSize(12); pdf.setTextColor(0); pdf.text(`${FLOWS[s].title} — ANTES`, margin, y); y += 6;
          arr.forEach(item=>{
            y = addImageToPdf(pdf, item.dataURL, item.label, margin, y, 80);
          });
        }
      });
    });

    await renderSection(pdf, 'DEPOIS', margin, () => {
      selectedServices.forEach(s => {
        const arr = imageStore[s].DEPOIS || [];
        if(arr && arr.length){
          pdf.setFontSize(12); pdf.setTextColor(0); pdf.text(`${FLOWS[s].title} — DEPOIS`, margin, y); y += 6;
          arr.forEach(item=>{
            y = addImageToPdf(pdf, item.dataURL, item.label, margin, y, 80);
          });
        }
      });
    });

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