const escapeLanguages = {
  pt: {
    label: 'PT',
    title: 'Calculadora de Escapamento | FlatOutPY',
    links: [['PT', 'index.html'], ['ES', 'index-es.html'], ['EN', 'index-en.html']],
    map: {
      'FlatOut Exhaust Calculator': 'Calculadora de Escapamento',
      'Exhaust sizing & gas velocity calculator': 'Dimensionamento de escapamento e velocidade dos gases',
      'Carregar exemplo: Infiniti G37 2012': 'Carregar exemplo: Infiniti G37 2012',
      Motor: 'Motor',
      'Tipo de motor': 'Tipo de motor',
      'RPM de potência máxima': 'RPM de potência máxima',
      Potência: 'Potência',
      'Combustível / combustão': 'Combustível / combustão',
      Combustível: 'Combustível',
      Escape: 'Escape',
      'Escape simples': 'Escape simples',
      'Escape duplo': 'Escape duplo',
      'Diâmetro atual': 'Diâmetro atual',
      'Diâmetro personalizado adicional': 'Diâmetro personalizado adicional',
      'Velocidade-alvo mínima (ft/min)': 'Velocidade-alvo mínima (ft/min)',
      'Velocidade-alvo máxima (ft/min)': 'Velocidade-alvo máxima (ft/min)',
      'Temperatura dos gases de escape (EGT)': 'Temperatura dos gases de escape (EGT)',
      'Resultados': 'Resultados',
      'Diâmetro calculado': 'Diâmetro calculado',
      'Classificação (diâmetro comercial)': 'Classificação (diâmetro comercial)',
      'Ver cálculo completo': 'Ver cálculo completo',
      'Ocultar cálculo completo': 'Ocultar cálculo completo',
      'Premissas utilizadas neste cálculo': 'Premissas utilizadas neste cálculo',
      'Salvar configuração': 'Salvar configuração',
      'Limpar': 'Limpar',
      Cilindrada: 'Cilindrada',
      'Número de cilindros': 'Número de cilindros',
      'RPM máxima': 'RPM máxima',
      'RPM de torque máximo': 'RPM de torque máximo',
      'Eficiência volumétrica (VE)': 'Eficiência volumétrica (VE)',
      Preset: 'Preset',
      'VE utilizada (%)': 'VE utilizada (%)',
      Configuração: 'Configuração',
      'Número de tubos após coletor': 'Número de tubos após coletor',
      Adicionar: 'Adicionar',
      'Objetivo do projeto': 'Objetivo do projeto',
      'Original / conforto': 'Original / conforto',
      'Rua / equilíbrio': 'Rua / equilíbrio',
      Performance: 'Performance',
      'Alta potência': 'Alta potência',
      Customizado: 'Customizado',
      'Pressão': 'Pressão',
      'Unidade de pressão': 'Unidade de pressão',
      'Pressão atmosférica': 'Pressão atmosférica',
      'Vazão de admissão': 'Vazão de admissão',
      'Vazão volumétrica do escape': 'Vazão volumétrica do escape',
      'Vazão mássica do escape': 'Vazão mássica do escape',
      'Faixa recomendada': 'Faixa recomendada',
      Gráfico: 'Gráfico'
    }
  },
  es: {
    label: 'ES',
    title: 'Calculadora de Escape | FlatOutPY',
    links: [['PT', 'index.html'], ['ES', 'index-es.html'], ['EN', 'index-en.html']],
    map: {
      'FlatOut Exhaust Calculator': 'Calculadora de Escape',
      'Exhaust sizing & gas velocity calculator': 'Dimensionamiento de escape y velocidad de gases',
      'Carregar exemplo: Infiniti G37 2012': 'Cargar ejemplo: Infiniti G37 2012',
      Motor: 'Motor',
      'Tipo de motor': 'Tipo de motor',
      'RPM de potência máxima': 'RPM de potencia máxima',
      Potência: 'Potencia',
      'Combustível / combustão': 'Combustible / combustión',
      Combustível: 'Combustible',
      Escape: 'Escape',
      'Escape simples': 'Escape simple',
      'Escape duplo': 'Escape doble',
      'Diâmetro atual': 'Diámetro actual',
      'Diâmetro personalizado adicional': 'Diámetro personalizado adicional',
      'Velocidade-alvo mínima (ft/min)': 'Velocidad objetivo mínima (ft/min)',
      'Velocidade-alvo máxima (ft/min)': 'Velocidad objetivo máxima (ft/min)',
      'Temperatura dos gases de escape (EGT)': 'Temperatura de los gases de escape (EGT)',
      'Resultados': 'Resultados',
      'Diâmetro calculado': 'Diámetro calculado',
      'Classificação (diâmetro comercial)': 'Clasificación (diámetro comercial)',
      'Ver cálculo completo': 'Ver cálculo completo',
      'Ocultar cálculo completo': 'Ocultar cálculo completo',
      'Premissas utilizadas neste cálculo': 'Supuestos utilizados en este cálculo',
      'Salvar configuração': 'Guardar configuración',
      'Limpar': 'Limpiar',
      Cilindrada: 'Cilindrada',
      'Número de cilindros': 'Número de cilindros',
      'RPM máxima': 'RPM máxima',
      'RPM de torque máximo': 'RPM de par máximo',
      'Eficiência volumétrica (VE)': 'Eficiencia volumétrica (VE)',
      Preset: 'Preajuste',
      'VE utilizada (%)': 'VE utilizada (%)',
      Configuração: 'Configuración',
      'Número de tubos após coletor': 'Número de tubos después del colector',
      Adicionar: 'Añadir',
      'Objetivo do projeto': 'Objetivo del proyecto',
      'Original / conforto': 'Original / confort',
      'Rua / equilíbrio': 'Calle / equilibrio',
      Performance: 'Rendimiento',
      'Alta potência': 'Alta potencia',
      Customizado: 'Personalizado',
      Pressão: 'Presión',
      'Unidade de pressão': 'Unidad de presión',
      'Pressão atmosférica': 'Presión atmosférica',
      'Vazão de admissão': 'Flujo de admisión',
      'Vazão volumétrica do escape': 'Flujo volumétrico del escape',
      'Vazão mássica do escape': 'Flujo másico del escape',
      'Faixa recomendada': 'Rango recomendado',
      Gráfico: 'Gráfico',
      '(opcional, referência)': '(opcional, referencia)',
      'Presets são estimativas de referência, não valores universais — ajuste conforme o motor real.': 'Los preajustes son estimaciones de referencia, no valores universales; ajústalos según el motor real.',
      'Diâmetros padrão sempre incluídos:': 'Diámetros estándar incluidos:',
      'Quanto maior o diâmetro, menor a velocidade — a área sombreada é a faixa-alvo escolhida.': 'Cuanto mayor es el diámetro, menor es la velocidad; el área sombreada es el rango objetivo elegido.',
      'Próximo tamanho comercial:': 'Próximo tamaño comercial:',
      'Ar + combustível (conservação de massa)': 'Aire + combustible (conservación de masa)',
      'Faixa-alvo:': 'Rango objetivo:',
      'Objetivo:': 'Objetivo:',
      Aspirado: 'Aspiración natural',
      Gasolina: 'Gasolina',
      Outro: 'Otro',
      'Baixa carga': 'Carga baja',
      'Uso normal': 'Uso normal',
      'Alta carga': 'Carga alta',
      'Personalizado': 'Personalizado'
    }
  },
  en: {
    label: 'EN',
    title: 'Exhaust Sizing Calculator | FlatOutPY',
    links: [['PT', 'index.html'], ['ES', 'index-es.html'], ['EN', 'index-en.html']],
    map: {
      'FlatOut Exhaust Calculator': 'Exhaust Sizing Calculator',
      'Exhaust sizing & gas velocity calculator': 'Exhaust sizing and gas velocity calculator',
      'Carregar exemplo: Infiniti G37 2012': 'Load example: 2012 Infiniti G37',
      Motor: 'Engine',
      'Tipo de motor': 'Engine type',
      'RPM de potência máxima': 'Peak power RPM',
      Potência: 'Power',
      'Combustível / combustão': 'Fuel / combustion',
      Combustível: 'Fuel',
      Escape: 'Exhaust',
      'Escape simples': 'Single exhaust',
      'Escape duplo': 'Dual exhaust',
      'Diâmetro atual': 'Current diameter',
      'Diâmetro personalizado adicional': 'Additional custom diameter',
      'Velocidade-alvo mínima (ft/min)': 'Minimum target velocity (ft/min)',
      'Velocidade-alvo máxima (ft/min)': 'Maximum target velocity (ft/min)',
      'Temperatura dos gases de escape (EGT)': 'Exhaust gas temperature (EGT)',
      'Resultados': 'Results',
      'Diâmetro calculado': 'Calculated diameter',
      'Classificação (diâmetro comercial)': 'Rating (commercial diameter)',
      'Ver cálculo completo': 'View full calculation',
      'Ocultar cálculo completo': 'Hide full calculation',
      'Premissas utilizadas neste cálculo': 'Assumptions used in this calculation',
      'Salvar configuração': 'Save configuration',
      'Limpar': 'Clear',
      Cilindrada: 'Displacement',
      'Número de cilindros': 'Number of cylinders',
      'RPM máxima': 'Maximum RPM',
      'RPM de torque máximo': 'Peak torque RPM',
      'Eficiência volumétrica (VE)': 'Volumetric efficiency (VE)',
      Preset: 'Preset',
      'VE utilizada (%)': 'Used VE (%)',
      Configuração: 'Configuration',
      'Número de tubos após coletor': 'Number of pipes after collector',
      Adicionar: 'Add',
      'Objetivo do projeto': 'Project goal',
      'Original / conforto': 'Stock / comfort',
      'Rua / equilíbrio': 'Street / balance',
      Performance: 'Performance',
      'Alta potência': 'High power',
      Customizado: 'Custom',
      Pressão: 'Pressure',
      'Unidade de pressão': 'Pressure unit',
      'Pressão atmosférica': 'Atmospheric pressure',
      'Vazão de admissão': 'Intake flow',
      'Vazão volumétrica do escape': 'Exhaust volumetric flow',
      'Vazão mássica do escape': 'Exhaust mass flow',
      'Faixa recomendada': 'Recommended range',
      Gráfico: 'Chart',
      '(opcional, referência)': '(optional, reference)',
      'Presets são estimativas de referência, não valores universais — ajuste conforme o motor real.': 'Presets are reference estimates, not universal values; adjust them to the actual engine.',
      'Diâmetros padrão sempre incluídos:': 'Standard diameters always included:',
      'Quanto maior o diâmetro, menor a velocidade — a área sombreada é a faixa-alvo escolhida.': 'The larger the diameter, the lower the velocity; the shaded area is the selected target range.',
      'Próximo tamanho comercial:': 'Next commercial size:',
      'Ar + combustível (conservação de massa)': 'Air + fuel (mass conservation)',
      'Faixa-alvo:': 'Target range:',
      'Objetivo:': 'Goal:',
      Aspirado: 'Naturally aspirated',
      Gasolina: 'Gasoline',
      Outro: 'Other',
      'Baixa carga': 'Low load',
      'Uso normal': 'Normal use',
      'Alta carga': 'High load',
      'Personalizado': 'Custom'
    }
  }
};

function translateEscapePage(language) {
  const config = escapeLanguages[language] || escapeLanguages.pt;
  document.title = config.title;

  const footerText = {
    pt: {
      brand: 'FLATOUTPY — OFICINA DE PERFORMANCE · PRESIDENTE FRANCO, PARAGUAI',
      note: 'Estimativa de engenharia. Os resultados não substituem testes reais nem garantem potência, torque ou desempenho.'
    },
    es: {
      brand: 'FLATOUTPY — TALLER DE PERFORMANCE · PRESIDENTE FRANCO, PARAGUAY',
      note: 'Estimación de ingeniería. Los resultados no sustituyen pruebas reales ni garantizan potencia, torque o rendimiento.'
    },
    en: {
      brand: 'FLATOUTPY — PERFORMANCE WORKSHOP · PRESIDENTE FRANCO, PARAGUAY',
      note: 'Engineering estimate. Results do not replace real-world testing or guarantee power, torque, or performance.'
    }
  }[language] || null;
  const footer = document.querySelector('.app-footer p');
  if (footer && footerText && footer.dataset.language !== language) {
    footer.innerHTML = `<strong>${footerText.brand}</strong><span class="footer-note">${footerText.note}</span>`;
    footer.dataset.language = language;
  }

  document.querySelectorAll('[placeholder], [title], [aria-label]').forEach((element) => {
    ['placeholder', 'title', 'aria-label'].forEach((attribute) => {
      const value = element.getAttribute(attribute);
      if (value && config.map[value]) element.setAttribute(attribute, config.map[value]);
    });
  });

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach((node) => {
    const source = node.nodeValue.trim();
    if (!source || !config.map[source]) return;
    node.nodeValue = node.nodeValue.replace(source, config.map[source]);
  });

  const header = document.querySelector('.app-header-inner');
  if (!header || header.querySelector('.language-nav')) return;
  const languageNav = document.createElement('nav');
  languageNav.className = 'language-nav';
  languageNav.setAttribute('aria-label', 'Language');
  languageNav.innerHTML = config.links
    .map(([label, href]) => `<a href="${href}"${label === config.label ? ' class="active"' : ''}>${label}</a>`)
    .join('');
  header.appendChild(languageNav);
}

const escapeLanguage = document.documentElement.lang.slice(0, 2).toLowerCase();
const startEscapeTranslation = () => translateEscapePage(escapeLanguage);

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => setTimeout(startEscapeTranslation, 80), { once: true });
} else {
  setTimeout(startEscapeTranslation, 80);
}

new MutationObserver(() => translateEscapePage(escapeLanguage)).observe(document.body, {
  childList: true,
  subtree: true
});
