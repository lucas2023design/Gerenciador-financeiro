
# Instruções do Agente

## Objetivo
Desenvolver um gerenciador financeiro pessoal
com interface moderna, intuitiva e responsiva.

## Tecnologias
- Frontend: React e TypeScript
- Backend: Node.js, Express e TypeScript
- Banco de dados: SQLite
- Interface em português brasileiro

## Funcionalidades
- Cadastrar, editar e excluir receitas e despesas.
- Organizar lançamentos por categoria e data.
- Consultar movimentações por mês.
- Calcular receitas, despesas e saldo mensal.
- Armazenar os dados permanentemente no SQLite.

## Regras financeiras
- Receitas aumentam o saldo.
- Despesas diminuem o saldo.
- Saldo mensal = receitas - despesas do mês.
- Armazenar valores monetários em centavos inteiros.
- Impedir valores negativos ou iguais a zero nos lançamentos.

## Convenções de código
- Não escrever comentários desnecessários.
- Utilizar nomes claros e descritivos.
- Limitar arquivos TypeScript a 100 linhas.
- Limitar funções a 30 linhas.
- Evitar mais de três níveis de condicionais.
- Utilizar no máximo três parâmetros por função.
- Substituir valores mágicos por constantes nomeadas.
- Organizar responsabilidades em arquivos menores.
- Validar os dados recebidos.

## Qualidade
- Implementar testes das regras financeiras.
- Tratar erros adequadamente.
- Criar uma interface responsiva.
- Documentar como executar o projeto.
- Verificar se o sistema funciona antes de finalizar.
