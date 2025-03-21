# Projeto de Agendamento de Clientes

Este projeto é uma aplicação para gerenciar agendamentos de clientes. Ele permite que os usuários visualizem, agendem e excluam compromissos, além de visualizar um calendário interativo para facilitar o agendamento e gerenciamento.

## Funcionalidades

- **Visualização de Agendamentos**: Exibe todos os agendamentos programados para um dia específico.
- **Cadastro de Agendamento**: Permite ao usuário selecionar um cliente e um horário de início e término para agendar um compromisso.
- **Tabela de Agendamentos**: Mostra os agendamentos em uma tabela com as colunas de "Início", "Término", "Cliente" e "Ações" (exclusão de agendamento).
- **Seleção de Cliente**: Os clientes são listados em um campo de seleção, onde o usuário pode escolher um cliente para o agendamento.
- **Calendário Interativo**: Um calendário integrado para facilitar a navegação entre os dias e visualização dos agendamentos.

## Tecnologias Utilizadas

- **Angular**: Framework front-end para construção da aplicação.
- **Angular Material**: Biblioteca de componentes do Angular para um design moderno e responsivo.
- **JSON-Server**: Para simular o backend e persistir dados (agendamentos e clientes).
- **MockServer**: Usado para simular a comunicação com o servidor e testar o fluxo de dados.

## Estrutura de Dados

### Tabelas

#### Tabela de Clientes
Esta tabela contém informações sobre os clientes que podem ser selecionados durante o agendamento. Exemplo de estrutura:

| ID   | Nome      |
|------|-----------|
| 1    | João Silva|
| 2    | Maria Souza|
| 3    | Pedro Oliveira|

#### Tabela de Agendamentos
Esta tabela contém informações sobre os agendamentos realizados, como o horário de início, horário de término, cliente e ações (excluir agendamento). Exemplo de estrutura:

| Início      | Término     | Cliente      | Ações |
|-------------|-------------|--------------|-------|
| 08:00 AM    | 09:00 AM    | João Silva   | Excluir |
| 09:30 AM    | 10:30 AM    | Maria Souza  | Excluir |
| 11:00 AM    | 12:00 PM    | Pedro Oliveira | Excluir |

## Como Rodar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/felkj/BarberShopJavaEAngular.git
Instale as dependências:

bash
Copiar
Editar
npm install
Inicie o servidor mock para simular o backend:

bash
Copiar
Editar
npm run mockserver
Inicie a aplicação Angular:

bash
Copiar
Editar
ng serve
Acesse a aplicação no navegador em http://localhost:4200.

Contribuição
Se você deseja contribuir para este projeto, fique à vontade para abrir um pull request. Por favor, siga as convenções de código e deixe comentários claros nas suas alterações.


markdown
Copiar
Editar

### Explicação:

- **Funcionalidades**: Descreve brevemente as principais funcionalidades do projeto.
- **Tecnologias Utilizadas**: Lista as tecnologias que foram utilizadas no desenvolvimento.
- **Estrutura de Dados**: Adiciona as tabelas de agendamentos e clientes, como você mencionou, para que fiquem visíveis no README.
- **Como Rodar o Projeto**: Fornece as instruções para rodar o projeto localmente, incluindo a inicialização do mockserver e do Angular.
- **Contribuição**: Orientações sobre como outros podem contribuir para o projeto.

Sinta-se à vontade para adaptar o conteúdo conforme necessário!
