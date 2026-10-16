# Clareza — Gerenciador financeiro pessoal

Projeto da atividade prática do minicurso de Agentes de IA da UNIVAS. Interface em português brasileiro, receitas e despesas por categoria e data, seleção de mês, edição, exclusão e resumo mensal automático.

## Requisitos e instalação

Use Node.js 22.12 ou superior e npm. Na pasta raiz:

```powershell
npm.cmd install
npm.cmd run dev
```

Abra **http://127.0.0.1:5173** no navegador. O mesmo comando inicia o frontend e a API (porta 3001). Para encerrar, pressione Ctrl+C. No Windows, `npm.cmd` evita restrições de execução do `npm.ps1`; em outros sistemas use `npm`.

## Uso

1. Selecione o mês de referência no painel.
2. Clique em **Novo lançamento** e informe descrição, tipo, valor, categoria e data.
3. Informe valores como `123,45` ou `123.45`, sem separador de milhar.
4. Use o lápis para editar e a lixeira para excluir, confirmando a operação.
5. O resumo considera somente lançamentos cuja data pertence ao mês escolhido. Um lançamento em outro mês aparece ao selecionar esse mês.

Categorias iniciais: Salário, Freelance, Alimentação, Moradia, Transporte, Saúde, Lazer, Educação e Outros.

## Dados e regras

O SQLite ? criado automaticamente em `backend/data/financeiro.db` na primeira inicialização pelo comando da raiz. Os dados permanecem após reiniciar. Não apague essa pasta para preservar os registros. Para fazer backup, encerre o sistema e copie o banco. O banco começa vazio, com categorias pré-cadastradas.

Valores são armazenados como centavos inteiros e devem ser positivos, com até duas casas decimais na interface. O limite por lançamento ? R$ 1 bilhão. Receitas aumentam o saldo; despesas diminuem. Saldo mensal = receitas − despesas, podendo ser negativo. Datas e referências de categoria são validadas. O esquema e o índice são inicializados em `backend/src/database.ts` com operações idempotentes.

## Verificação

```powershell
npm.cmd test
npm.cmd run check
npm.cmd run lint
npm.cmd run build
```

Os testes usam bancos isolados e verificam cálculos, centavos, valores inválidos, datas, categorias, CRUD, filtro mensal, ordenação e persistência após reabertura. A compilação gera `frontend/dist` e `backend/dist`. Para uso local, utilize `npm.cmd run dev`; os arquivos compilados precisam de um servidor estático com encaminhamento de `/api` para a API ao configurar outra hospedagem.

## Organização

- `frontend/src`: componentes React, integração HTTP, estado e estilos responsivos.
- `backend/src`: API Express, validação Zod, regras financeiras e repositório SQLite com consultas parametrizadas.
- `backend/tests`: testes Vitest e Supertest.

API: `GET /api/categories`, `GET /api/entries?month=AAAA-MM`, `POST /api/entries`, `PUT /api/entries/:id` e `DELETE /api/entries/:id`. O corpo de criação/edição contém `description`, `type` (`income` ou `expense`), `amount` (centavos), `categoryId` e `date` (`AAAA-MM-DD`).

A aplicação ? destinada ao uso pessoal local: os servidores escutam em 127.0.0.1 e não há autenticação. Tipografia usa Google Fonts com alternativa local caso não haja conexão.

A verificação ESLint aplica os limites de 100 linhas por arquivo TypeScript, 30 linhas por função, três parâmetros e três níveis de blocos. O middleware de erro usa a aridade exigida pelo Express via propriedade da função.
