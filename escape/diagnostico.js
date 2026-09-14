/**
 * Diagnóstico visual de escape — FlatOut Exhaust Calculator
 * ----------------------------------------------------------
 * Este arquivo é 100% independente do bundle principal (index-CDW1s2jg.js).
 * Ele NÃO recria nem substitui a calculadora: apenas lê os valores que o
 * usuário já preencheu no formulário (via DOM) e usa as MESMAS fórmulas de
 * engenharia já presentes na calculadora (extraídas e replicadas fielmente
 * abaixo) para gerar um painel de diagnóstico simples, visual e em
 * linguagem leiga, comparando "escape atual" x "escape escolhido".
 *
 * Nenhum número de CV/Nm é inventado. Os únicos números mostrados
 * (área, velocidade dos gases, diâmetro recomendado) são resultado direto
 * das fórmulas reais já usadas pela calculadora. Os indicadores de
 * potência/torque/resposta/som/consumo/uso são tendências qualitativas,
 * nunca valores numéricos inventados.
 */
(function () {
  'use strict';

  /* =========================================================================
   * 1) CONSTANTES E FÓRMULAS — réplica fiel da calculadora existente
   * ========================================================================= */

  // Diâmetros comerciais padrão sempre considerados pela calculadora.
  var STANDARD_DIAMETERS_IN = [1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.5, 4];

  // AFR padrão por combustível (igual ao usado na calculadora).
  var AFR_DEFAULT = { gasolina: 14.7, etanol: 9, flex: 12, diesel: 14.5, outro: 14.7 };

  // Faixas de velocidade-alvo dos gases (ft/min) por objetivo do projeto.
  var TARGET_RANGES = {
    torque: { min: 9000, max: 12000 },
    rua: { min: 8000, max: 11000 },
    performance: { min: 7000, max: 10000 },
    limite: { min: 5500, max: 8500 },
  };
  var GOAL_TARGET_RANGE_ID = {
    original: 'torque',
    rua: 'rua',
    performance: 'performance',
    alta_potencia: 'limite',
  };
  var GOAL_LABEL_TO_ID = {
    'Original / conforto': 'original',
    'Rua / equilíbrio': 'rua',
    Performance: 'performance',
    'Alta potência': 'alta_potencia',
    Customizado: 'customizado',
  };

  var L_TO_IN3 = 61.0237;
  var CFM_TO_M3S = 0.0004719474432;
  var R_AIR = 287.05;
  var R_EXHAUST = 287;
  var REF_TEMP_C = 25;
  var REF_PRESSURE_KPA = 101.325;
  // A própria calculadora usa uma referência fixa de EGT (250°C) para o
  // dimensionamento/recomendação, independente do EGT real informado
  // (que só é usado para exibir a vazão volumétrica no card de resultados).
  var SIZING_EGT_C = 250;

  var PRESSURE_TO_KPA = {
    kPa: function (v) { return v; },
    atm: function (v) { return v * 101.325; },
    psi: function (v) { return v * 6.894757; },
    bar: function (v) { return v * 100; },
  };

  function kelvin(c) { return c + 273.15; }
  function areaFt2(diameterIn) { var ft = diameterIn / 12; return (Math.PI * ft * ft) / 4; }
  function areaIn2(diameterIn) { return (Math.PI * diameterIn * diameterIn) / 4; }
  function diameterInFromAreaFt2(a) { return Math.sqrt((4 * a) / Math.PI) * 12; }
  function airDensity(pressureKPa, tempC, R) { return (pressureKPa * 1000) / (R * kelvin(tempC)); }

  // Classificação de status por velocidade dos gases (idêntica à calculadora).
  function classifyStatus(velocityFtMin, minFtMin, maxFtMin) {
    var tol = 0.3;
    if (velocityFtMin > maxFtMin * (1 + tol)) return 'muito_pequeno';
    if (velocityFtMin > maxFtMin) return 'pequeno';
    if (velocityFtMin >= minFtMin) return 'ideal';
    if (velocityFtMin >= minFtMin * (1 - tol)) return 'grande';
    return 'muito_grande';
  }

  // Réplica do motor de cálculo (conservação de massa + gás ideal),
  // igual ao usado pela calculadora para gerar recomendação e tabela.
  function computeEngineState(state) {
    var displacementL = state.displacementUnit === 'L' ? state.displacement : state.displacement / L_TO_IN3;
    var cid = displacementL * L_TO_IN3;
    var intakeCfm = (cid * state.rpmMax * state.ve) / 3456;
    var intakeAirDensity = airDensity(REF_PRESSURE_KPA, REF_TEMP_C, R_AIR);
    var airMassFlowKgS = intakeAirDensity * (intakeCfm * CFM_TO_M3S);

    var afr = AFR_DEFAULT[state.fuel] || 14.7;
    if (state.afr !== null && state.afr !== '' && !isNaN(parseFloat(state.afr))) {
      afr = parseFloat(state.afr);
    }
    var exhaustMassFlowKgS = airMassFlowKgS * (1 + 1 / afr);

    var useAbsolute = state.aspiration !== 'aspirado' && state.useAbsolutePressure;
    var exhaustPressureKPa = useAbsolute && state.absolutePressureKPa
      ? state.absolutePressureKPa
      : state.atmPressureKPa + state.backpressureKPa;

    var exhaustDensitySizing = airDensity(exhaustPressureKPa, SIZING_EGT_C, R_EXHAUST);
    var exhaustM3sSizing = exhaustMassFlowKgS / exhaustDensitySizing;
    var exhaustCfmSizing = exhaustM3sSizing / CFM_TO_M3S;
    var perPipeCfm = exhaustCfmSizing / state.pipeCount;

    var targetRange = state.goal === 'customizado'
      ? { min: state.customTargetMin, max: state.customTargetMax }
      : (TARGET_RANGES[GOAL_TARGET_RANGE_ID[state.goal]] || TARGET_RANGES.rua);

    var diameters = uniqueSorted(STANDARD_DIAMETERS_IN.concat(state.customDiameters));

    function velocityAt(diameterIn) { return perPipeCfm / areaFt2(diameterIn); }
    function statusAt(diameterIn) { return classifyStatus(velocityAt(diameterIn), targetRange.min, targetRange.max); }

    // Réplica da escolha do diâmetro comercial recomendado.
    var avgTarget = (targetRange.min + targetRange.max) / 2;
    var calculatedDiameterIn = diameterInFromAreaFt2(perPipeCfm / avgTarget);
    var boundLow = diameterInFromAreaFt2(perPipeCfm / targetRange.max);
    var boundHigh = diameterInFromAreaFt2(perPipeCfm / targetRange.min);
    var withinBounds = diameters
      .filter(function (d) { return d >= boundLow && d <= boundHigh; })
      .sort(function (a, b) { return Math.abs(a - calculatedDiameterIn) - Math.abs(b - calculatedDiameterIn); });
    var nextCommercialDiameterIn = withinBounds.length
      ? withinBounds[0]
      : diameters.slice().sort(function (a, b) {
          return Math.abs(a - calculatedDiameterIn) - Math.abs(b - calculatedDiameterIn);
        })[0];

    return {
      perPipeCfm: perPipeCfm,
      targetRange: targetRange,
      diameters: diameters,
      calculatedDiameterIn: calculatedDiameterIn,
      nextCommercialDiameterIn: nextCommercialDiameterIn,
      velocityAt: velocityAt,
      statusAt: statusAt,
    };
  }

  function uniqueSorted(arr) {
    var set = {};
    var out = [];
    arr.forEach(function (v) {
      var key = Math.round(v * 1000);
      if (!set[key]) { set[key] = true; out.push(v); }
    });
    return out.sort(function (a, b) { return a - b; });
  }

  /* =========================================================================
   * 2) LEITURA DO ESTADO ATUAL DO FORMULÁRIO (via DOM)
   * ========================================================================= */

  function textOf(el) { return el ? el.textContent.replace(/\s+/g, ' ').trim() : ''; }

  function findLabelField(startsWith) {
    var labels = document.querySelectorAll('.app-sidebar label.field');
    for (var i = 0; i < labels.length; i++) {
      var span = labels[i].querySelector(':scope > span');
      if (span && textOf(span).indexOf(startsWith) === 0) return labels[i];
    }
    return null;
  }

  function getNumberInput(label) {
    if (!label) return null;
    var input = label.querySelector('input');
    if (!input || input.value === '') return null;
    var val = parseFloat(input.value.replace(',', '.'));
    return isNaN(val) ? null : val;
  }

  function getSelectValue(label) {
    if (!label) return null;
    var select = label.querySelector('select');
    return select ? select.value : null;
  }

  function readState() {
    var sidebar = document.querySelector('.app-sidebar');
    if (!sidebar) return null;

    var displacementLabel = findLabelField('Cilindrada');
    var displacement = getNumberInput(displacementLabel);
    var displacementUnit = getSelectValue(displacementLabel) || 'L';

    var cylinders = getNumberInput(findLabelField('Número de cilindros'));
    var aspiration = getSelectValue(findLabelField('Tipo de motor')) || 'aspirado';
    var rpmMax = getNumberInput(findLabelField('RPM máxima'));

    var veRaw = getNumberInput(findLabelField('VE utilizada'));
    var ve = veRaw !== null ? veRaw / 100 : 0.85;

    var fuel = getSelectValue(findLabelField('Combustível')) || 'gasolina';
    var afrLabel = findLabelField('AFR / Lambda');
    var afrInput = afrLabel ? afrLabel.querySelector('input') : null;
    var afr = afrInput ? afrInput.value : '';

    var layout = getSelectValue(findLabelField('Configuração')) || 'simples';
    var pipeCount = getNumberInput(findLabelField('Número de tubos após coletor')) || 1;

    var currentDiameterLabel = findLabelField('Diâmetro atual');
    var currentDiameterInput = currentDiameterLabel ? currentDiameterLabel.querySelector('input') : null;
    var currentDiameterRaw = currentDiameterInput ? currentDiameterInput.value : '';
    var currentDiameterIn = currentDiameterRaw ? parseFloat(currentDiameterRaw) : null;
    if (currentDiameterIn !== null && isNaN(currentDiameterIn)) currentDiameterIn = null;

    var customDiameters = [];
    document.querySelectorAll('.app-sidebar .chip').forEach(function (chip) {
      var v = parseFloat(chip.textContent);
      if (!isNaN(v)) customDiameters.push(v);
    });

    var activeGoalTitle = textOf(document.querySelector('.app-sidebar .goal-card-active .goal-card-title'));
    var goal = GOAL_LABEL_TO_ID[activeGoalTitle] || 'rua';

    var customTargetMin = null;
    var customTargetMax = null;
    if (goal === 'customizado') {
      customTargetMin = getNumberInput(findLabelField('Velocidade-alvo mínima'));
      customTargetMax = getNumberInput(findLabelField('Velocidade-alvo máxima'));
    }

    var pressureUnit = getSelectValue(findLabelField('Unidade de pressão')) || 'kPa';
    var atmRaw = getNumberInput(findLabelField('Pressão atmosférica'));
    var atmPressureKPa = atmRaw !== null ? PRESSURE_TO_KPA[pressureUnit](atmRaw) : REF_PRESSURE_KPA;

    var backRaw = getNumberInput(findLabelField('Backpressure'));
    var backpressureKPa = backRaw !== null ? PRESSURE_TO_KPA[pressureUnit](backRaw) : 0;

    var useAbsLabel = findLabelField('Usar pressão absoluta');
    var useAbsInput = useAbsLabel ? useAbsLabel.querySelector('input[type="checkbox"]') : null;
    var useAbsolutePressure = useAbsInput ? useAbsInput.checked : false;

    var absRaw = getNumberInput(findLabelField('Pressão absoluta'));
    var absolutePressureKPa = absRaw !== null ? PRESSURE_TO_KPA[pressureUnit](absRaw) : null;

    if (displacement === null || cylinders === null || rpmMax === null || rpmMax <= 0 || cylinders <= 0 || pipeCount <= 0) {
      return null;
    }

    return {
      displacement: displacement, displacementUnit: displacementUnit, cylinders: cylinders,
      aspiration: aspiration, rpmMax: rpmMax, ve: ve, fuel: fuel, afr: afr,
      layout: layout, pipeCount: pipeCount, currentDiameterIn: currentDiameterIn,
      customDiameters: customDiameters, goal: goal,
      customTargetMin: customTargetMin, customTargetMax: customTargetMax,
      atmPressureKPa: atmPressureKPa, backpressureKPa: backpressureKPa,
      useAbsolutePressure: useAbsolutePressure, absolutePressureKPa: absolutePressureKPa,
    };
  }

  /* =========================================================================
   * 3) TRADUÇÃO PARA LINGUAGEM SIMPLES (diagnóstico)
   * ========================================================================= */

  var STATUS_SCORE = { muito_pequeno: -2, pequeno: -1, ideal: 0, grande: 1, muito_grande: 2 };
  var VERDICT_MAP = {
    ideal: { emoji: '🟢', label: 'IDEAL' },
    pequeno: { emoji: '🟡', label: 'ACEITÁVEL' },
    grande: { emoji: '🟡', label: 'ACEITÁVEL' },
    muito_pequeno: { emoji: '🔴', label: 'SUBDIMENSIONADO' },
    muito_grande: { emoji: '🟠', label: 'SUPERDIMENSIONADO' },
  };

  function buildDiagnosis(engine, currentDiameterIn, chosenDiameterIn, aspiration, goal) {
    var velCurrent = engine.velocityAt(currentDiameterIn);
    var velChosen = engine.velocityAt(chosenDiameterIn);
    var statusCurrent = engine.statusAt(currentDiameterIn);
    var statusChosen = engine.statusAt(chosenDiameterIn);
    var areaCurrent = areaIn2(currentDiameterIn);
    var areaChosen = areaIn2(chosenDiameterIn);
    var areaChangePct = ((areaChosen - areaCurrent) / areaCurrent) * 100;
    var velChangePct = ((velChosen - velCurrent) / velCurrent) * 100;
    var score = STATUS_SCORE[statusChosen];
    var turboLike = aspiration !== 'aspirado';
    var highRpmGoal = goal === 'performance' || goal === 'alta_potencia';

    var indicators = [];

    // Potência
    if (score <= -2) {
      indicators.push({ icon: '🏎️', label: 'Potência', trend: '↘️ Pode perder', note: 'restrição pode limitar o fluxo em alta rotação' });
    } else if (score === -1) {
      indicators.push({ icon: '🏎️', label: 'Potência', trend: '➡️ Praticamente igual', note: 'pequena restrição adicional' });
    } else if (score === 0) {
      indicators.push({ icon: '🏎️', label: 'Potência', trend: '➡️ Praticamente igual', note: 'diâmetro já bem ajustado para este motor' });
    } else if (score === 1) {
      indicators.push({ icon: '🏎️', label: 'Potência', trend: turboLike ? '↗️ Ganho moderado' : '↗️ Pequeno ganho', note: 'ganho em alta rotação' });
    } else {
      indicators.push({ icon: '🏎️', label: 'Potência', trend: (turboLike || highRpmGoal) ? '↗️ Ganho moderado' : '↗️ Pequeno ganho', note: 'ganho em alta, com pouco benefício adicional' });
    }

    // Torque
    if (score <= -2) {
      indicators.push({ icon: '💪', label: 'Torque', trend: '↘️ Pode perder', note: 'excesso de contrapressão em baixa/média' });
    } else if (score === -1) {
      indicators.push({ icon: '💪', label: 'Torque', trend: '↗️ Pode melhorar', note: 'boa velocidade dos gases em baixa' });
    } else if (score === 0) {
      indicators.push({ icon: '💪', label: 'Torque', trend: '➡️ Praticamente igual' });
    } else if (score === 1) {
      indicators.push({ icon: '💪', label: 'Torque', trend: '↘️ Pode perder em baixa' });
    } else {
      indicators.push({ icon: '💪', label: 'Torque', trend: '↘️ Pode perder em baixa/média' });
    }

    // Resposta
    if (velChangePct <= -15 && score >= 1) {
      indicators.push({ icon: '⚡', label: 'Resposta', trend: '🟡 Pode ficar mais lenta em baixa' });
    } else if (velChangePct >= 15 && score <= 0) {
      indicators.push({ icon: '⚡', label: 'Resposta', trend: '🟢 Mais rápida' });
    } else {
      indicators.push({ icon: '⚡', label: 'Resposta', trend: '➡️ Praticamente igual' });
    }

    // Fluxo
    var fluxoMap = { muito_pequeno: '🔴 Restrito', pequeno: '🟡 Limitado', ideal: '🟢 Adequado', grande: '🟢 Fluxo elevado', muito_grande: '🔴 Grande demais' };
    indicators.push({ icon: '🌬️', label: 'Fluxo', trend: fluxoMap[statusChosen] });

    // Som (tendência — diâmetro sozinho não determina o som real)
    var som;
    if (Math.abs(areaChangePct) < 15) som = '➡️ Praticamente igual (tendência)';
    else if (areaChangePct >= 60) som = '🔊🔊 Muito mais alto (tendência)';
    else if (areaChangePct >= 15) som = '🔊 Mais alto (tendência)';
    else som = '➡️ Tende a ficar mais abafado (tendência)';
    indicators.push({ icon: '🔊', label: 'Som', trend: som });

    // Timbre (tendência)
    var timbre;
    if (areaChangePct >= 40) timbre = 'Mais grave / esportivo (tendência)';
    else if (areaChangePct <= -40) timbre = 'Tende a ficar mais contido';
    else timbre = 'Praticamente igual';
    indicators.push({ icon: '🎵', label: 'Timbre', trend: timbre });

    // Consumo
    var consumo = Math.abs(areaChangePct) < 40 ? '➡️ Pouca alteração esperada' : '⚠️ Depende da configuração';
    indicators.push({ icon: '⛽', label: 'Consumo', trend: consumo });

    // Cidade
    var cidadeMap = { muito_pequeno: '🟡 Aceitável', pequeno: '🟢 Bom', ideal: '🟢 Bom', grande: '🟠 Não é o ideal', muito_grande: '🔴 Desaconselhado' };
    indicators.push({ icon: '🏙️', label: 'Cidade', trend: cidadeMap[statusChosen] });

    // Estrada
    var estradaMap = { muito_pequeno: '🟠 Não é o ideal', pequeno: '🟡 Aceitável', ideal: '🟢 Bom', grande: '🟢 Bom', muito_grande: '🟡 Aceitável' };
    indicators.push({ icon: '🛣️', label: 'Estrada', trend: estradaMap[statusChosen] });

    // Alta rotação
    var altaRot;
    if (score <= -1) altaRot = '🔴 Pode prejudicar';
    else if (score === 0) altaRot = '➡️ Neutro';
    else altaRot = '🟢 Favorece';
    indicators.push({ icon: '🏁', label: 'Alta rotação', trend: altaRot });

    return {
      indicators: indicators,
      verdict: VERDICT_MAP[statusChosen],
      statusCurrent: statusCurrent,
      statusChosen: statusChosen,
      velCurrent: velCurrent,
      velChosen: velChosen,
      areaCurrent: areaCurrent,
      areaChosen: areaChosen,
      areaChangePct: areaChangePct,
      velChangePct: velChangePct,
    };
  }

  function buildWhyText(diag, currentDiameterIn, chosenDiameterIn, targetRange) {
    var areaTxt = (diag.areaChangePct >= 0 ? '+' : '') + diag.areaChangePct.toFixed(0) + '%';
    var velTxt = (diag.velChangePct >= 0 ? '+' : '') + diag.velChangePct.toFixed(0) + '%';
    return 'Trocar de ' + fmtDiam(currentDiameterIn) + ' para ' + fmtDiam(chosenDiameterIn) +
      ' muda a área de passagem em ' + areaTxt + ' e a velocidade dos gases em ' + velTxt +
      ' (de ' + Math.round(diag.velCurrent) + ' para ' + Math.round(diag.velChosen) + ' ft/min). ' +
      'Para este motor e objetivo selecionado, a faixa de velocidade considerada ideal é ' +
      Math.round(targetRange.min) + '–' + Math.round(targetRange.max) + ' ft/min. ' +
      'Este resultado é uma estimativa de engenharia (conservação de massa e gás ideal), ' +
      'não uma simulação de CFD, e não considera abafadores, ressonadores, curvas ou comprimento da tubulação.';
  }

  function fmtDiam(d) {
    var s = d.toFixed(2).replace(/0+$/, '').replace(/\.$/, '');
    return s + '"';
  }

  /* =========================================================================
   * 4) RENDERIZAÇÃO DO PAINEL (injeção não invasiva no DOM)
   * ========================================================================= */

  var diagCard = null;
  var userChosenDiameter = null;

  function findAnchorCard() {
    var eyebrows = document.querySelectorAll('.app-content .section-eyebrow');
    for (var i = 0; i < eyebrows.length; i++) {
      if (textOf(eyebrows[i]) === 'Simulação') return eyebrows[i].closest('.card');
    }
    return null;
  }

  function ensureCard(anchor) {
    if (!diagCard || !diagCard.isConnected) {
      diagCard = document.createElement('div');
      diagCard.className = 'card diag-card';
      diagCard.id = 'exhaust-diagnostico-card';
    }
    if (anchor.nextElementSibling !== diagCard) {
      anchor.insertAdjacentElement('afterend', diagCard);
    }
    return diagCard;
  }

  function renderCard(container, ctx) {
    var state = ctx.state;
    var engine = ctx.engine;

    if (!state.currentDiameterIn || state.currentDiameterIn <= 0) {
      container.innerHTML =
        '<div class="section-heading">' +
          '<div class="section-eyebrow">Diagnóstico</div>' +
          '<h2>🔧 Diagnóstico do escape</h2>' +
        '</div>' +
        '<p class="section-sub">Informe o <strong>diâmetro atual</strong> do seu escape (seção "Escape") para ver o diagnóstico visual comparando com o diâmetro escolhido.</p>';
      return;
    }

    var chosenDiameterIn = ctx.chosenDiameterIn;
    var diag = buildDiagnosis(engine, state.currentDiameterIn, chosenDiameterIn, state.aspiration, state.goal);

    var diamOptions = engine.diameters.map(function (d) {
      var sel = Math.abs(d - chosenDiameterIn) < 0.001 ? ' selected' : '';
      return '<option value="' + d + '"' + sel + '>' + fmtDiam(d) + '</option>';
    }).join('');

    var rows = diag.indicators.map(function (ind) {
      return (
        '<div class="diag-row">' +
          '<div class="diag-row-label">' + ind.icon + ' ' + ind.label + '</div>' +
          '<div class="diag-row-trend">' + ind.trend +
            (ind.note ? '<span class="diag-row-note">' + ind.note + '</span>' : '') +
          '</div>' +
        '</div>'
      );
    }).join('');

    var currentVerdict = VERDICT_MAP[diag.statusCurrent];
    var deltaIn = chosenDiameterIn - state.currentDiameterIn;
    var deltaTxt = (deltaIn >= 0 ? '+' : '') + deltaIn.toFixed(2) + '"';
    var areaTxt = (diag.areaChangePct >= 0 ? '+' : '') + diag.areaChangePct.toFixed(0) + '%';

    container.innerHTML =
      '<div class="section-heading">' +
        '<div class="section-eyebrow">Diagnóstico</div>' +
        '<h2>🔧 Diagnóstico do escape</h2>' +
        '<p class="section-sub">Resultado simplificado, sem termos técnicos. Toque em "Por que isso?" para ver os detalhes.</p>' +
      '</div>' +
      '<label class="field diag-selector">' +
        '<span>Diâmetro escolhido para comparar</span>' +
        '<select id="diag-diameter-select">' + diamOptions + '</select>' +
      '</label>' +
      '<div class="diag-headline">' +
        '<div class="diag-headline-diam">' + fmtDiam(state.currentDiameterIn) + ' → ' + fmtDiam(chosenDiameterIn) + '</div>' +
        '<div class="diag-verdict-pill">' + diag.verdict.emoji + ' ' + diag.verdict.label + '</div>' +
      '</div>' +
      '<div class="diag-current-note">Sistema atual: ' + currentVerdict.emoji + ' ' + currentVerdict.label + '</div>' +
      '<div class="diag-grid">' + rows + '</div>' +
      '<div class="diag-footer">' +
        '<div class="diag-best">⭐ Melhor escolha estimada: <strong>' + fmtDiam(engine.nextCommercialDiameterIn) + '</strong></div>' +
        '<div class="diag-compare">' +
          '<span>Mudança: ' + deltaTxt + '</span>' +
          '<span>Área de passagem: ' + areaTxt + '</span>' +
        '</div>' +
        '<button type="button" class="btn btn-outline diag-why-toggle">ⓘ Por que isso?</button>' +
        '<p class="diag-why-text field-note" hidden>' + buildWhyText(diag, state.currentDiameterIn, chosenDiameterIn, engine.targetRange) + '</p>' +
      '</div>';

    var select = container.querySelector('#diag-diameter-select');
    select.addEventListener('change', function () {
      userChosenDiameter = parseFloat(select.value);
      scheduleUpdate();
    });

    var whyBtn = container.querySelector('.diag-why-toggle');
    var whyText = container.querySelector('.diag-why-text');
    whyBtn.addEventListener('click', function () {
      whyText.hidden = !whyText.hidden;
    });
  }

  /* =========================================================================
   * 5) SINCRONIZAÇÃO COM O APP (sem tocar no React)
   * ========================================================================= */

  function sync() {
    var anchor = findAnchorCard();
    if (!anchor) {
      if (diagCard && diagCard.isConnected) diagCard.remove();
      return;
    }
    var card = ensureCard(anchor);
    var state = readState();
    if (!state) {
      card.innerHTML = '';
      return;
    }
    var engine = computeEngineState(state);

    var validChosen = userChosenDiameter !== null && engine.diameters.some(function (d) {
      return Math.abs(d - userChosenDiameter) < 0.001;
    });
    if (!validChosen) userChosenDiameter = engine.nextCommercialDiameterIn;

    renderCard(card, { engine: engine, state: state, chosenDiameterIn: userChosenDiameter });
  }

  var updateScheduled = false;
  function scheduleUpdate() {
    if (updateScheduled) return;
    updateScheduled = true;
    requestAnimationFrame(function () {
      updateScheduled = false;
      try { sync(); } catch (err) { console.error('[Diagnóstico do escape] erro ao atualizar:', err); }
    });
  }

  document.addEventListener('input', function (e) {
    if (e.target.closest && e.target.closest('.app-sidebar')) scheduleUpdate();
  }, true);
  document.addEventListener('change', function (e) {
    if (e.target.closest && e.target.closest('.app-sidebar')) scheduleUpdate();
  }, true);
  document.addEventListener('click', function (e) {
    if (e.target.closest && e.target.closest('.app-sidebar')) scheduleUpdate();
  }, true);

  function start() {
    var root = document.getElementById('root');
    if (!root) { requestAnimationFrame(start); return; }
    var observer = new MutationObserver(function (mutations) {
      var relevant = mutations.some(function (m) {
        return !diagCard || !diagCard.contains(m.target);
      });
      if (relevant) scheduleUpdate();
    });
    observer.observe(root, { childList: true, subtree: true });
    scheduleUpdate();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
