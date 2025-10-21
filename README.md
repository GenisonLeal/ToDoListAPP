Projeto: Aplicação de Gerenciamento de Tarefas (To-Do List)

Esta é uma aplicação Full-Stack de lista de tarefas que permite aos utilizadores criar, consultar, atualizar o estado e excluir tarefas.

Tecnologias Utilizadas

Front-end:

React: Biblioteca JavaScript para construir interfaces de utilizador.

Axios: Cliente HTTP para fazer requisições à API.

HTML5 & CSS3: Para estrutura e estilização.

Back-end:

Node.js: Ambiente de execução JavaScript no servidor.

Express.js: Framework para criar a API e gerir as rotas.

mysql2: Driver para a conexão entre Node.js e MySQL.

CORS: Middleware para permitir requisições de origens diferentes.

dotenv: Para gestão de variáveis de ambiente.

Banco de Dados:

MySQL: Sistema de gestão de base de dados relacional.

Funcionalidades

Criar Tarefas: Formulário funcional para adicionar novas tarefas com título e descrição.

Listar Tarefas: Visualização de todas as tarefas existentes.

Atualizar Status: Marcar tarefas como "concluídas" ou "pendentes".

Excluir Tarefas: Remover tarefas da lista.

Validação de Dados: O título da tarefa é obrigatório no back-end.

Design Responsivo: A interface adapta-se a diferentes tamanhos de ecrã (básico).

Como Executar o Projeto

Pré-requisitos

Node.js (versão 14 ou superior)

MySQL

1. Configuração do Back-end

# Clone o repositório
git clone <URL_DO_SEU_REPOSITORIO>

# Navegue para a pasta do back-end
cd backend

# Instale as dependências
npm install

# Crie um ficheiro .env a partir do .env.example
# e adicione as suas credenciais do MySQL
cp .env.example .env

# Execute o script SQL `database_setup.sql` no seu cliente MySQL
# para criar a base de dados e a tabela.

# Inicie o servidor back-end
npm start


O servidor estará a correr em http://localhost:3001.

2. Configuração do Front-end

# Num novo terminal, navegue para a pasta do front-end
cd ../frontend

# Instale as dependências
npm install

# Inicie a aplicação React
npm start


A aplicação estará acessível em http://localhost:3000 no seu navegador.