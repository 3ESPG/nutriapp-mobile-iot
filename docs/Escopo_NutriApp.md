# Documento de Escopo — NutriApp

**Disciplina:** Mobile Development & IoT — FIAP  
**Checkpoint:** CP4 — Idealização  
**Grupo:** GELO E LIMÃO

| Integrante | RM | Função |
|---|---|---|
| Felipe Braunstein e Silva | RM554483 | Documentação e escopo |
| Felipe do Nascimento Fernandes | RM554598 | Arquitetura e setup técnico |
| Henrique Ignacio Bartalo | RM555274 | Identidade visual e marca |
| Gustavo Henrique Martins | RM556956 | Pitch e modelo de negócio |

> A idealização do produto — problema, público-alvo, personas e proposta de valor — foi construída em conjunto pelo grupo. As funções acima indicam a **responsabilidade principal** de cada integrante na condução de cada frente.

---

## 1. Nome

**NutriApp**

O nome combina diretamente os conceitos de **nutrição** e **aplicativo**. É curto, fácil de pronunciar e imediatamente relacionado ao propósito do produto.

Alternativas consideradas: *NutriFlow* e *PratoLeve*. Para fins acadêmicos e de desenvolvimento, o nome oficial permanece **NutriApp**.

---

## 2. Visão geral

Aplicativo mobile voltado à organização da rotina alimentar por meio de um **diário de refeições** integrado a uma **plataforma de descoberta de receitas**.

O usuário cria seu perfil e informa preferências alimentares básicas. Durante o dia registra café da manhã, almoço, jantar e lanches. A Home apresenta um resumo da rotina e facilita o acesso ao diário e às receitas. Na área de receitas é possível pesquisar preparações, aplicar filtros e visualizar ingredientes, modo de preparo e informações nutricionais básicas.

**Benefício principal:** centralizar em uma única experiência *registrar o que comeu + entender sua rotina + descobrir o que preparar em seguida*.

---

## 3. Problema

Manter uma alimentação organizada é difícil quando as informações estão espalhadas entre anotações, aplicativos de receitas, pesquisas na internet e a memória do próprio usuário.

Principais problemas identificados:

- dificuldade para lembrar e acompanhar as refeições realizadas;
- falta de organização alimentar durante semanas mais corridas;
- indecisão frequente sobre o que preparar;
- dificuldade para encontrar receitas práticas compatíveis com preferências pessoais;
- repetição excessiva das mesmas refeições;
- ingredientes disponíveis em casa que deixam de ser utilizados;
- dificuldade para visualizar a própria rotina alimentar ao longo da semana;
- soluções digitais que apresentam muitas métricas quando o usuário procura apenas organização e praticidade.

Existe, portanto, uma oportunidade para uma aplicação que utilize tecnologia de maneira simples, organizando a rotina alimentar sem transformar cada refeição em uma experiência excessivamente técnica.

---

## 4. Justificativa

O smartphone está presente em praticamente todos os momentos do cotidiano do público proposto, o que torna um aplicativo mobile adequado para registrar informações rapidamente.

Ao centralizar diário e receitas, o NutriApp reduz a quantidade de etapas necessárias para organizar a alimentação: em vez de alternar entre um bloco de notas, um aplicativo de contagem de calorias e três sites de receitas, o usuário resolve tudo em um só lugar.

Do ponto de vista acadêmico, o projeto também é adequado à disciplina por exercitar navegação, componentização, tipagem, organização de camadas de dados e preparo para evoluções conectadas (IoT).

---

## 5. Público-alvo

Pessoas aproximadamente entre **18 e 45 anos** — principalmente estudantes, jovens profissionais e adultos com rotina ativa que desejam melhorar a organização da própria alimentação.

### Perfil

São usuários que:

- utilizam smartphones diariamente;
- possuem pouco tempo para organizar refeições;
- pesquisam receitas na internet ou em redes sociais;
- desejam manter uma rotina alimentar mais organizada;
- frequentemente não sabem o que preparar;
- podem possuir ingredientes em casa sem ideias claras de utilização;
- valorizam aplicativos simples e visualmente agradáveis;
- não procuram necessariamente uma ferramenta clínica ou esportiva avançada.

### Necessidades

- rapidez para registrar uma refeição;
- facilidade para consultar registros anteriores;
- inspiração para novas refeições;
- receitas práticas;
- filtros que reduzam o tempo de pesquisa;
- visão simples da semana;
- personalização sem configuração excessiva.

### Principais dificuldades

- falta de planejamento;
- esquecimento das refeições anteriores;
- pouco tempo;
- dificuldade para variar o cardápio;
- excesso de receitas disponíveis sem personalização;
- desperdício de determinados ingredientes;
- abandono de aplicativos excessivamente complexos.

---

## 6. Personas

### Persona 1 — Mariana Costa

- **Idade:** 22 anos
- **Ocupação:** estudante universitária e estagiária

**Rotina.** Estuda pela manhã e trabalha durante a tarde. Sai cedo de casa e retorna apenas no início da noite. Em semanas de provas ou entregas, sua alimentação fica ainda mais desorganizada.

**Dores.**
- não lembra exatamente o que comeu nos dias anteriores;
- demora para decidir o jantar;
- salva receitas nas redes sociais e raramente volta a encontrá-las;
- compra ingredientes que acabam não sendo utilizados;
- não quer utilizar aplicativos complicados.

**Necessidades.** Uma ferramenta rápida, simples e visual que permita registrar a alimentação sem ocupar muito tempo.

**Como o NutriApp ajuda.** Registrar o almoço em poucos segundos, consultar o histórico durante a noite e acessar sugestões de receitas simples para o jantar.

### Persona 2 — Rafael Mendes

- **Idade:** 34 anos
- **Ocupação:** analista de sistemas

**Rotina.** Trabalha de forma híbrida e prepara parte de suas refeições em casa. Possui ingredientes disponíveis, mas frequentemente não sabe como combiná-los e termina preparando refeições muito semelhantes.

**Dores.**
- pouca variedade nas refeições;
- falta de planejamento semanal;
- pesquisa repetidamente as mesmas receitas;
- esquece quais preparações já realizou recentemente;
- desperdiça alguns ingredientes.

**Necessidades.** Inspiração rápida e uma maneira simples de visualizar seu histórico.

**Como o NutriApp ajuda.** Consultar refeições anteriores, salvar receitas preferidas e, futuramente, informar ingredientes disponíveis para receber sugestões de uso.

---

## 7. Proposta de valor

> **“Sua rotina alimentar organizada. Sua próxima refeição inspirada.”**

O NutriApp oferece uma maneira simples de transformar registros alimentares em informações úteis para o cotidiano. Diferentemente de uma experiência baseada apenas em números e calorias, a proposta é conectar o **passado** — representado pelo diário alimentar — ao **próximo passo do usuário** — representado por receitas e sugestões.

- **Benefício central:** facilitar a organização da rotina alimentar e reduzir o esforço necessário para decidir o que comer ou preparar.
- **Por que utilizar:** o NutriApp reúne atividades que normalmente acontecem separadamente — *registrar → acompanhar → descobrir → preparar*.
- **Como simplifica a rotina:** poucos passos, linguagem acessível e telas organizadas.
- **Diferencial da experiência:** o diário não é apenas um histórico; ele funciona como fonte de contexto para recomendações futuras.

---

## 8. Objetivos

### Objetivo geral

Desenvolver uma aplicação mobile simples e intuitiva que permita registrar refeições e utilizar essas informações como apoio à organização alimentar e à descoberta de receitas.

### Objetivos específicos

- permitir registros rápidos de refeições;
- organizar registros por data e categoria;
- disponibilizar histórico alimentar;
- apresentar um catálogo de receitas;
- permitir pesquisa e filtragem;
- possibilitar favoritos;
- oferecer visão semanal;
- utilizar preferências para personalizar a experiência;
- preparar a arquitetura para evoluções futuras.

---

## 9. Funcionalidades

O ciclo central do produto é **Registrar → Acompanhar → Descobrir → Preparar**.

| Etapa | Onde acontece |
|---|---|
| Registrar | Home e Diário (botão flutuante) → Adicionar refeição |
| Acompanhar | Diário, Histórico por data e Resumo semanal no Perfil |
| Descobrir | Receitas, com pesquisa e filtros |
| Preparar | Detalhes da receita, com ingredientes e modo de preparo |

---

## 10. MVP

**1. Cadastro e login** — criação e acesso à conta do usuário.

**2. Perfil** — informações básicas e preferências alimentares.

**3. Home** — resumo do dia e atalhos principais.

**4. Diário alimentar** — organização das refeições por data, nas categorias Café da manhã, Almoço, Lanche e Jantar.

**5. Adicionar refeição** — registro contendo nome, categoria, horário e descrição opcional.

**6. Histórico** — consulta dos registros anteriores.

**7. Receitas** — catálogo organizado de receitas.

**8. Pesquisa** — busca pelo nome da receita ou por ingrediente.

**9. Filtros** — rápida, vegetariana, café da manhã, almoço, jantar e lanche.

**10. Detalhes da receita** — imagem, descrição, tempo estimado, ingredientes, modo de preparo e informações nutricionais básicas quando disponíveis.
*As informações possuem caráter informativo e não substituem orientação profissional.*

**11. Favoritos** — permite salvar receitas para acesso posterior.

**12. Resumo semanal** — visão simples sobre a quantidade e a distribuição dos registros realizados.

### Funcionalidades futuras

recomendações personalizadas; sugestões considerando ingredientes disponíveis; lista de compras; criação de metas pessoais; lembretes; compartilhamento de receitas; integração com APIs externas de receitas; reconhecimento de alimentos por imagem; acompanhamento de hidratação; integração com dispositivos inteligentes; sincronização com smartwatches; insights mais avançados sobre a rotina.

---

## 11. Fora do MVP

Para evitar aumento excessivo do escopo, **não** fazem parte do MVP:

- diagnóstico nutricional;
- prescrição de dietas;
- consultas médicas;
- acompanhamento clínico;
- inteligência artificial generativa complexa;
- reconhecimento automático obrigatório de alimentos;
- marketplace;
- rede social;
- integração obrigatória com smartwatch;
- sensores IoT;
- pagamentos dentro da primeira versão funcional.

---

## 12. Diferenciais

O principal diferencial está na conexão entre duas atividades normalmente separadas: **acompanhar o que já foi consumido** e **decidir o que consumir ou preparar depois**.

O produto é construído sobre cinco pilares:

1. **Diário + receitas** — o diário funciona como parte de um ecossistema, não como ferramenta isolada.
2. **Simplicidade** — não é necessário preencher dezenas de campos para registrar uma refeição.
3. **Personalização** — preferências e histórico melhoram as sugestões.
4. **Hábitos acima de números** — a experiência não se estrutura exclusivamente em calorias e peso.
5. **Aproveitamento de alimentos** — futuramente, ingredientes disponíveis poderão guiar a descoberta de receitas.

### Comparação conceitual

| Característica | Aplicativo alimentar tradicional | NutriApp |
|---|---|---|
| Registro de refeições | Pode existir | Sim |
| Contagem de calorias | Frequentemente valorizada | Complementar |
| Receitas | Pode existir separadamente | Parte central |
| Diário conectado às receitas | Nem sempre | Sim |
| Sugestões por hábitos | Variável | Previsto |
| Ingredientes disponíveis | Variável | Evolução planejada |
| Simplicidade | Depende da solução | Prioridade |
| Construção de hábitos | Pode existir | Pilar do conceito |
| Redução de desperdício | Normalmente secundária | Evolução estratégica |

*A comparação é conceitual e não atribui funcionalidades específicas a concorrentes individuais.*

---

## 13. Modelo de negócio

Modelo proposto: **freemium**.

- **NutriApp Gratuito:** cadastro, diário alimentar, histórico, receitas, pesquisa, filtros básicos, favoritos, resumo semanal simples e preferências básicas.
- **NutriApp Premium:** sugestões altamente personalizadas, recomendação considerando histórico, filtros avançados, sugestões com ingredientes disponíveis, planejamento semanal, insights avançados, histórico ampliado e personalização adicional.
- **Projeção acadêmica de preços:** R$ 14,90/mês ou R$ 119,90/ano (≈ R$ 9,99 por mês).

Detalhamento completo em [`Pitch_Modelo_Negocio_NutriApp.md`](Pitch_Modelo_Negocio_NutriApp.md).

---

## 14. Tecnologias

| Tecnologia | Uso no projeto |
|---|---|
| React Native `0.86` | Base da aplicação mobile |
| Expo SDK `57` | Ferramental de desenvolvimento e execução |
| TypeScript | Tipagem estática e interfaces do domínio |
| Expo Router | Navegação baseada em arquivos (stack + tabs) |
| React Hooks | Estado e lógica reutilizável (`useMeals`, `useRecipes`) |
| react-native-svg | Logo vetorial da marca |
| Manrope e Inter | Tipografia oficial, via `@expo-google-fonts` |
| Git / GitHub | Versionamento e entrega |
| Figma | Prototipação da identidade visual |

Durante a etapa de prototipação são utilizados **dados mockados**, isolados na pasta `mocks/` e acessados pela camada `services/`, o que permitirá a troca por persistência local ou API no CP6 sem alterar as telas.

### Estrutura de pastas

```
app/          Rotas e telas (Expo Router)
assets/       Imagens, fontes, ícones e logo
components/   Componentes reutilizáveis
constants/    Tokens do design system
hooks/        Hooks personalizados
services/     Acesso e manipulação de dados
mocks/        Dados fictícios da prototipação
types/        Interfaces TypeScript
utils/        Funções auxiliares
docs/         Documentação acadêmica
design/       Link e materiais do Figma
```

### Interfaces principais

```ts
export interface Meal {
  id: string;
  name: string;
  category: 'breakfast' | 'lunch' | 'snack' | 'dinner';
  date: string;
  time: string;
  notes?: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  preparationTime: number;
  difficulty: 'easy' | 'medium';
  servings: number;
  tags: RecipeTag[];
  ingredients: string[];
  steps: string[];
  nutrition?: NutritionInfo;
  favorite: boolean;
}
```

---

## 15. Identidade visual

| Cor | Hex | Uso |
|---|---|---|
| Azul Nutri | `#1F6F78` | Cor primária, botões, navegação e identidade |
| Coral Vital | `#FF8A65` | CTAs, destaques e elementos interativos |
| Creme Natural | `#FFF8F2` | Fundo principal |
| Grafite | `#22313A` | Textos principais |
| Verde Equilíbrio | `#79B473` | Confirmações e estados positivos |
| Amarelo Energia | `#F4C95D` | Indicadores e pequenos destaques |

**Tipografia:** Manrope (títulos, números, cards, botões) e Inter (textos, descrições, formulários).

Documento completo em [`Identidade_Visual_NutriApp.md`](Identidade_Visual_NutriApp.md).

---

## 16. Próximas etapas

| Checkpoint | Entrega |
|---|---|
| **CP4 — Idealização** *(atual)* | Conceito, documentação, marca, identidade visual, arquitetura, setup e navegação inicial |
| **CP5 — Prototipação** | Refinamento das telas, navegação completa, componentes, dados mockados e fluxos de diário e receitas |
| **CP6 — Entrega** | Persistência, integração dos fluxos, refinamento visual, testes, build final e APK instalável |
