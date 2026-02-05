# Gestão de Investimentos (React + Firebase PWA)

Projeto base inspirado no repositório `Saltoleto/gestao-investimentos`, adaptado para React + Firebase com experiência PWA.

## Requisitos

- Node.js 18+

## Configuração

1. Instale dependências:

```bash
npm install
```

2. Crie um arquivo `.env` seguindo o exemplo:

```bash
cp .env.example .env
```

3. Preencha as variáveis do Firebase no `.env`. Se quiser rodar sem Firebase,
   mantenha o arquivo vazio e o app ficará em modo offline.

## Desenvolvimento

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Pré-visualização

```bash
npm run preview
```

## Backlog de funcionalidades (App.jsx)

- Metas personalizadas com acompanhamento em tempo real.
- Aportes inteligentes com distribuição por metas, riscos e oportunidades.
- Visão consolidada de renda fixa, variável e cripto.
- Resumo da carteira com métricas de total, meta anual e aportes mensais.
- Perfil de investidor com risco atual e projeção anual.
- Visualização responsiva para desktop, tablet e mobile.
- Conexão com contas e corretoras favoritas.
- Metas e alertas inteligentes configuráveis.
- Acompanhamento de resultados em qualquer dispositivo.
- Distribuição da carteira por classes de ativos com barras percentuais.
- Metas em andamento com progresso e valores.
- Alertas inteligentes com ações rápidas.
- Linha do tempo com últimos eventos financeiros.
- Status de conexão com Firebase.
- Instalação do app como PWA.
