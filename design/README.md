# Design — NutriApp

Materiais de design do CP4.

## Conteúdo

| Arquivo | Descrição |
|---|---|
| `link-figma.txt` | Link do protótipo no Figma e dados da equipe |
| `previews/logo-principal.png` | Logo principal (símbolo + wordmark) |
| `previews/app-icon.png` | Ícone do aplicativo |
| `previews/01-splash.png` … `09-perfil.png` | As nove telas conceituais |

As previews das telas foram capturadas da aplicação em execução, em viewport de 390 × 844 px.

## Fontes do logo

Os arquivos vetoriais do símbolo estão em [`../assets/logo/`](../assets/logo):

- `nutriapp-symbol.svg` — símbolo em azul-petróleo
- `nutriapp-symbol-inverse.svg` — símbolo claro, para fundos escuros
- `nutriapp-logo.svg` — logo principal (símbolo + wordmark)

O mesmo símbolo está implementado como componente React Native em [`../components/Logo.tsx`](../components/Logo.tsx).

## Tokens

Os tokens do design system são a fonte da verdade do projeto e estão em [`../constants/`](../constants): `colors.ts`, `typography.ts` e `spacing.ts`.
