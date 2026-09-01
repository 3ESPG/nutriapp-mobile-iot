# Checklist do CP4 — NutriApp

Mapeamento entre os requisitos da rubrica e os artefatos entregues neste repositório.

---

## Critérios de avaliação

| Critério | Peso | Onde está |
|---|---|---|
| Clareza do problema / proposta de valor | 20% | [Escopo §3, §5, §6, §7](Escopo_NutriApp.md) e [Pitch §1–§6](Pitch_Modelo_Negocio_NutriApp.md) |
| Qualidade da documentação (GitHub + README + escopo) | 25% | [`README.md`](../README.md) e [`docs/`](.) |
| Identidade visual e desenvolvimento de marca | 25% | [Identidade Visual](Identidade_Visual_NutriApp.md), [`design/previews/`](../design/previews), [`constants/`](../constants), [`components/`](../components) |
| Ideia de venda / modelo de negócio | 15% | [Pitch §7–§11](Pitch_Modelo_Negocio_NutriApp.md) |
| Organização do projeto inicial (setup técnico) | 15% | Estrutura de pastas, `app.json`, `package.json`, `tsconfig.json` e navegação em [`app/`](../app) |

---

## Documentação inicial

- [x] Apresentação do projeto — `README.md` e Escopo §2
- [x] Descrição do funcionamento — Escopo §2 e §9
- [x] Problema identificado — Escopo §3
- [x] Justificativa — Escopo §4
- [x] Público-alvo — Escopo §5
- [x] Perfil dos usuários — Escopo §5
- [x] Necessidades — Escopo §5
- [x] Dificuldades — Escopo §5
- [x] Personas — Escopo §6 (Mariana Costa e Rafael Mendes)
- [x] Proposta de valor — Escopo §7

## GitHub e documentação

- [x] Repositório criado e organizado — `3ESPG/nutriapp-mobile-iot`
- [x] README completo
- [x] Descrição do projeto
- [x] Objetivo
- [x] Problema
- [x] Solução
- [x] Funcionalidades
- [x] Tecnologias
- [x] Estrutura de pastas
- [x] Instruções de execução
- [x] Integrantes
- [x] RMs
- [x] Status
- [x] Roadmap CP4 → CP5 → CP6

## Documento de escopo

- [x] Nome — §1
- [x] Visão geral — §2
- [x] Problema — §3
- [x] Justificativa — §4
- [x] Público — §5
- [x] Personas — §6
- [x] Proposta de valor — §7
- [x] Objetivos — §8
- [x] Funcionalidades — §9
- [x] MVP — §10
- [x] Fora do MVP — §11
- [x] Diferenciais — §12
- [x] Modelo de negócio — §13
- [x] Tecnologias — §14
- [x] Identidade visual — §15
- [x] Próximas etapas — §16

## Estrutura técnica

- [x] React Native `0.86.3`
- [x] Expo SDK `57`
- [x] TypeScript (verificação limpa via `npm run lint`)
- [x] Expo Router (stack + tabs + rota dinâmica)
- [x] `components/` — 10 componentes reutilizáveis
- [x] `assets/` — ícones, logo e imagens
- [x] `services/` — camada de dados isolada
- [x] `hooks/` — `useMeals`, `useRecipes`, `useAppFonts`
- [x] `utils/` — helpers de data e formatação
- [x] `types/` — `Meal`, `Recipe`, `User`
- [x] `constants/` — cores, tipografia e espaçamento
- [x] `mocks/` — refeições, receitas e usuário
- [x] Setup inicial executado
- [x] Comandos de execução documentados

## Marca

- [x] Nome NutriApp — Identidade §3
- [x] Slogan — Identidade §4
- [x] Conceito — Identidade §5
- [x] Posicionamento — Identidade §5
- [x] Logo (SVG + componente React Native) — Identidade §1 e §2
- [x] Aplicações do logo — Identidade §1
- [x] Prompt para geração por IA — Identidade §2
- [x] Paleta de 6 cores — Identidade §6
- [x] Hexadecimais — Identidade §6
- [x] Uso das cores — Identidade §6
- [x] Tipografia — Identidade §7

## Identidade visual

- [x] Splash — `design/previews/01-splash.png`
- [x] Login — `design/previews/02-login.png`
- [x] Cadastro — `design/previews/03-cadastro.png`
- [x] Home — `design/previews/04-home.png`
- [x] Diário — `design/previews/05-diario.png`
- [x] Adicionar refeição — `design/previews/06-adicionar.png`
- [x] Receitas — `design/previews/07-receitas.png`
- [x] Detalhes da receita — `design/previews/08-detalhe.png`
- [x] Perfil / Progresso — `design/previews/09-perfil.png`
- [x] Bottom Tab Navigation — Identidade §9.10
- [x] Design System — Identidade §8
- [x] Prompt completo para Figma/IA — Identidade §9

## Pitch

- [x] Problema — Pitch §1
- [x] Solução — Pitch §2
- [x] Público — Pitch §3
- [x] Benefícios — Pitch §4
- [x] Diferencial — Pitch §5
- [x] Oportunidade — Pitch §6
- [x] Pitch de 30 segundos — Pitch §7
- [x] Pitch de 1 minuto — Pitch §8

## Modelo de negócio

- [x] Freemium — Pitch §9
- [x] Plano gratuito — Pitch §10
- [x] Premium — Pitch §10
- [x] Preço acadêmico mensal — Pitch §10
- [x] Preço acadêmico anual — Pitch §10
- [x] Receitas futuras — Pitch §11

## Diferencial competitivo

- [x] Diário + receitas
- [x] Simplicidade
- [x] Personalização
- [x] Hábitos
- [x] Ingredientes
- [x] Redução de desperdício
- [x] Comparativo conceitual

## Mobile Development & IoT

- [x] Possibilidades IoT mencionadas — `README.md`
- [x] Smartwatch
- [x] Dispositivos inteligentes
- [x] Balanças inteligentes
- [x] Sensores como evolução
- [x] Definido como possibilidade futura e não requisito do MVP

---

## Além do solicitado no CP4

O CP4 pede telas conceituais que **não precisam estar funcionais**. Nesta entrega o setup técnico foi além:

- as 9 telas estão implementadas em React Native e navegáveis;
- o design system está codificado em tokens e componentes;
- a camada de dados (`services/` + `hooks/`) já está isolada dos mocks, preparando o CP5 e o CP6;
- as imagens de `design/previews/` são capturas reais da aplicação em execução, e não mockups.

---

## Roadmap da entrega

| Checkpoint | Entrega |
|---|---|
| **CP4** — Idealização | Documentação + identidade + arquitetura + setup |
| **CP5** — Prototipação | Aplicativo navegável + dados mockados |
| **CP6** — Entrega | Aplicativo final + persistência + testes + APK |
