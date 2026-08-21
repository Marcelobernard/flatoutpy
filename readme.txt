# Flatoutpy

**Descrição**

Flatoutpy é um site estático simples que contém uma página principal, uma landing page e uma ferramenta de checklist. Este repositório concentra-se nas páginas que importam para a navegação e funcionamento do site.

## Arquivos importantes ✅

- `index.html` — Página principal (home).
- `lp.html` — Landing page (página de promoção/captura).
- `tool/checklist.html` — Checklist/utility dentro da pasta `tool/` (interativo).
- `local/alquiler.html` — Calendário anual de pagamentos.
- `local/alquiler.json` — Dados dos serviços e mês inicial do calendário.

## Estrutura rápida 🔧

Os arquivos mais relevantes:

```
index.html
lp.html
tool/
  checklist.html
app.js
styles.css
img/
favicon/
```

## Como testar/localmente 💡

1. Abra `index.html` no navegador para ver a home.
2. Abra `lp.html` para visualizar a landing page.
3. Abra `tool/checklist.html` para testar o checklist.
4. Abra `local/alquiler.html` para visualizar o calendário de pagamentos.

### Atualizar o calendário

Edite `local/alquiler.json` diretamente no GitHub. Cada serviço deve ter um nome,
uma data no formato `AAAA-MM-DD` e um valor:

```json
{
  "padrao": { "mes": 5, "ano": 2026 },
  "servicos": [
    { "nome": "Land Cruiser HDJ80", "data": "2026-05-05", "valor": 4000000 }
  ]
}
```

O calendário considera uma quota de PYG 4.000.000 por mês, começando no mês
definido em `padrao`. A página é somente leitura; alterações devem ser feitas
no JSON e publicadas junto com o site.

Dica: usar um servidor local (ex.: extensão Live Server do VSCode) evita problemas com caminhos relativos.

## Contato

- Autor: Marcelo Bernard

---

*README em Português — atualizado em 2025-12-22.*