To-Do List App ✅

Este projeto é uma aplicação web Full-Stack para gestão de tarefas, construída para demonstrar um fluxo completo de desenvolvimento, desde a base de dados até à interface do utilizador.

![Imagem da Aplicação]
(Aqui pode adicionar um screenshot da sua aplicação em funcionamento!)

📋 Índice

Funcionalidades

Tecnologias Utilizadas

Como Executar o Projeto

Autor

✨ Funcionalidades

✅ Criação de Tarefas: Formulário funcional para adicionar novas tarefas com título e descrição.

✅ Listagem de Tarefas: Visualização de todas as tarefas existentes de forma clara.

✅ Atualização de Status: Alterne facilmente o estado de uma tarefa entre "pendente" e "concluída".

✅ Exclusão de Tarefas: Remova tarefas que já não são necessárias.

✅ Validação de Dados: O back-end garante que o título da tarefa não pode ser vazio.

✅ Design Responsivo: A interface adapta-se para uma boa visualização em desktops e dispositivos móveis.

🛠️ Tecnologias Utilizadas

A aplicação foi construída com as seguintes tecnologias:

Front-end

React: Biblioteca para criar interfaces de utilizador interativas.

Axios: Cliente HTTP para comunicar com a API.

HTML5 & CSS3: Para a estrutura e estilização da aplicação.

Back-end

Node.js: Ambiente de execução para o JavaScript no servidor.

Express.js: Framework para a construção da API RESTful.

mysql2: Driver de conexão com a base de dados MySQL.

CORS: Middleware para permitir requisições entre o front-end e o back-end.

Dotenv: Para gestão das variáveis de ambiente.

Base de Dados

MySQL: Sistema de gestão de base de dados relacional para a persistência dos dados.

🚀 Como Executar o Projeto

Siga os passos abaixo para executar a aplicação localmente.

Pré-requisitos

Antes de começar, certifique-se que tem as seguintes ferramentas instaladas:

Node.js (versão 14 ou superior)

MySQL

Instalação

Clone o repositório:

git clone [https://github.com/GenisonLeal/ToDoListAPP.git](https://github.com/GenisonLeal/ToDoListAPP.git)
cd ToDoListAPP


Configuração do Back-end:
a. Navegue para a pasta do servidor:

cd backend


b. Instale as dependências:

npm install


c. Crie o ficheiro .env a partir do exemplo e preencha com as suas credenciais do MySQL:

cp .env.example .env


d. Execute o script database_setup.sql no seu cliente MySQL para criar a estrutura da base de dados.

e. Inicie o servidor:

npm start


O servidor estará a correr em http://localhost:3001.

Configuração do Front-end:
a. Abra um novo terminal e navegue para a pasta do cliente:

cd frontend


b. Instale as dependências:

npm install


c. Inicie a aplicação React:

npm start


A aplicação estará disponível em http://localhost:3000.

👨‍💻 Autor

Feito por Genison Leal.

GitHub: @GenisonLeal

LinkedIn: [Seu LinkedIn Aqui]