(() => {
  const QUOTA_MENSAL = 4_000_000;
  const MOEDA = 'PYG';
  const meses = [
    'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
  ];
  const currentYear = new Date().getFullYear();
  const money = new Intl.NumberFormat('es-PY', { style: 'currency', currency: MOEDA, maximumFractionDigits: 0 });
  const $ = (selector) => document.querySelector(selector);

  const elements = {
    loading: $('#loading'),
    error: $('#error'),
    content: $('#content'),
    year: $('#year'),
    months: $('#months'),
    startLabel: $('#start-label')
  };

  let data;

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
    return data.services.filter((service) => service.year === year).sort((a, b) => a.date - b.date);
  }

  function render(year) {
    const services = selectedServices(year);
    const total = services.reduce((sum, service) => sum + service.valor, 0);
    const startMonth = year === data.defaultYear ? data.startMonth : 0;
    const startText = `${meses[startMonth]} de ${year}`;
    elements.startLabel.textContent = `Cálculo iniciado em ${startText}`;

    elements.months.innerHTML = meses.map((month, index) => {
      let status = 'paid';
      let statusLabel = 'PAGO';
      let debit = 0;
      if (index >= startMonth) {
        const monthsElapsed = index - startMonth;
        const availableForMonth = Math.max(total - (monthsElapsed * QUOTA_MENSAL), 0);
        debit = Math.max(QUOTA_MENSAL - availableForMonth, 0);
        if (debit > 0) {
          status = 'due';
          statusLabel = 'A PAGAR';
        }
      }
      return `<article class="month-card${index === startMonth ? ' is-start' : ''}" data-status="${status}">
        <div class="month-name">${month}</div>
        <span class="status status-${status}">${statusLabel}</span>
        <div class="month-detail"><span>${status === 'next' ? 'Aguardando' : 'Em débito'}</span><strong>${status === 'next' ? '—' : money.format(debit)}</strong></div>
      </article>`;
    }).join('');
  }

  async function init() {
    try {
      const response = await fetch('./alquiler.json', { cache: 'no-store' });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      data = normalize(await response.json());
      renderYears();
      render(Number(elements.year.value));
      elements.year.addEventListener('change', () => render(Number(elements.year.value)));
      elements.loading.hidden = true;
      elements.content.hidden = false;
    } catch (error) {
      console.error(error);
      elements.loading.hidden = true;
      elements.error.hidden = false;
      elements.error.textContent = 'Não foi possível carregar os dados. Verifique o arquivo alquiler.json e abra esta página por um servidor local.';
    }
  }

  init();
})();
