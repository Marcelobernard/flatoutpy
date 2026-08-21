(() => {
  const QUOTA_MENSAL = 4_000_000;
  const MOEDA = 'PYG';
  let translations;
  let language = localStorage.getItem('flatoutpy-language') || 'pt';
  const currentYear = new Date().getFullYear();
  const money = new Intl.NumberFormat('es-PY', { style: 'currency', currency: MOEDA, maximumFractionDigits: 0 });
  let dateFormat;
  const $ = (selector) => document.querySelector(selector);

  const RING_COLOR = {
    paid: 'var(--lime)',
    due: 'var(--amber)',
    next: 'var(--sky)'
  };

  const elements = {
    loading: $('#loading'),
    error: $('#error'),
    content: $('#content'),
    year: $('#year'),
    months: $('#months'),
    startLabel: $('#start-label'),
    services: $('#services'),
    serviceYear: $('#service-year'),
    language: $('#language')
  };

  let data;

  function t(key) {
    return translations?.[language]?.[key] || translations?.pt?.[key] || key;
  }

  function applyTranslations() {
    document.documentElement.lang = language === 'es' ? 'es-PY' : 'pt-BR';
    document.title = `${t('title')} · Flatoutpy`;
    dateFormat = new Intl.DateTimeFormat(language === 'es' ? 'es-PY' : 'pt-BR');
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      element.textContent = t(element.dataset.i18n);
    });
    elements.language.setAttribute('aria-label', t('languageLabel'));
  }

  function parseDate(value) {
    if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
    const [year, month, day] = value.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day
      ? { date, year, month: month - 1 }
      : null;
  }

  function normalize(raw) {
    const defaultYear = Number(raw?.padrao?.ano) || currentYear;
    const defaultMonth = Number(raw?.padrao?.mes);
    const startMonth = Number.isInteger(defaultMonth) && defaultMonth >= 1 && defaultMonth <= 12 ? defaultMonth - 1 : 4;
    const services = Array.isArray(raw?.servicos) ? raw.servicos : [];
    const invalid = [];
    const validServices = services.flatMap((item, index) => {
      const parsed = parseDate(item?.data);
      const value = Number(item?.valor);
      if (!item?.nome || !parsed || !Number.isFinite(value) || value < 0) {
        invalid.push(index + 1);
        return [];
      }
      return [{ nome: String(item.nome), data: item.data, date: parsed.date, year: parsed.year, month: parsed.month, valor: value }];
    });
    return { defaultYear, startMonth, services: validServices, invalid };
  }

  function yearsAvailable() {
    const years = new Set(data.services.map((service) => service.year));
    years.add(data.defaultYear);
    return [...years].sort((a, b) => a - b);
  }

  function renderYears() {
    const years = yearsAvailable();
    elements.year.innerHTML = years.map((year) => `<option value="${year}">${year}</option>`).join('');
    elements.year.value = years.includes(currentYear) ? currentYear : data.defaultYear;
  }

  function selectedServices(year) {
    return data.services.filter((service) => service.year === year).sort((a, b) => b.date - a.date);
  }

  function render(year) {
    const services = selectedServices(year);
    const total = services.reduce((sum, service) => sum + service.valor, 0);
    const startMonth = year === data.defaultYear ? data.startMonth : 0;
    const months = t('months');
    const startText = `${months[startMonth]} de ${year}`;
    elements.startLabel.textContent = `${t('calculationStarted')} ${startText}`;
    elements.serviceYear.textContent = year;

    elements.months.innerHTML = months.map((month, index) => {
      let status = 'paid';
      let statusLabel = t('paid');
      let debit = 0;
      let pct = 100;
      if (index >= startMonth) {
        const monthsElapsed = index - startMonth;
        const availableForMonth = Math.max(total - (monthsElapsed * QUOTA_MENSAL), 0);
        debit = Math.max(QUOTA_MENSAL - availableForMonth, 0);
        pct = Math.round(((QUOTA_MENSAL - debit) / QUOTA_MENSAL) * 100);
        if (debit > 0) {
          status = 'due';
          statusLabel = t('due');
        }
      }
      return `<article class="month-card${index === startMonth ? ' is-start' : ''}" data-status="${status}">
        <div class="month-card-top">
          <div class="month-name">${month}</div>
          <div class="gauge" style="--pct:${pct};--ring-color:${RING_COLOR[status]}">
            <span class="gauge-value">${pct}%</span>
          </div>
        </div>
        <span class="status status-${status}">${statusLabel}</span>
        <div class="month-detail"><span>${t('debit')}</span><strong>${money.format(debit)}</strong></div>
      </article>`;
    }).join('');

    elements.services.innerHTML = services.length ? services.map((service) => `
      <div class="service-row">
        <div class="service-name">${escapeHtml(service.nome)}</div>
        <div class="service-date">${dateFormat.format(service.date)}</div>
        <div class="service-value" data-zero="${service.valor === 0}">${money.format(service.valor)}</div>
      </div>`).join('') : `<div class="empty">${t('noVehicles')}</div>`;
  }

  function escapeHtml(value) {
    return value.replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]);
  }

  function changeLanguage() {
    if (!translations) return;
    language = elements.language.value;
    localStorage.setItem('flatoutpy-language', language);
    applyTranslations();
    if (data) render(Number(elements.year.value));
  }

  elements.language.addEventListener('change', changeLanguage);

  async function init() {
    try {
      const [dataResponse, translationResponse] = await Promise.all([
        fetch('./alquiler.json', { cache: 'no-store' }),
        fetch('./alquiler.translations.json', { cache: 'no-store' })
      ]);
      if (!dataResponse.ok || !translationResponse.ok) throw new Error('Arquivos não encontrados');
      data = normalize(await dataResponse.json());
      translations = await translationResponse.json();
      elements.language.value = translations[language] ? language : 'pt';
      language = elements.language.value;
      applyTranslations();
      renderYears();
      render(Number(elements.year.value));
      elements.year.addEventListener('change', () => render(Number(elements.year.value)));
      elements.loading.hidden = true;
      elements.content.hidden = false;
    } catch (error) {
      console.error(error);
      elements.loading.hidden = true;
      elements.error.hidden = false;
      elements.error.textContent = t('error');
    }
  }

  init();
})();
