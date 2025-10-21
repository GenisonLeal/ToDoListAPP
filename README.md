# Projeto To-Do List

![Status do Projeto: Concluído](https://img.shields.io/badge/status-concluído-brightgreen?style=for-the-badge)

Uma aplicação Web Full-Stack para gestão de tarefas, desenvolvida com React, Node.js e MySQL. Este projeto demonstra a implementação completa de um sistema com operações CRUD (Create, Read, Update, Delete) e uma API RESTful.

<br>

<div align="center">
  <em><img width="1914" height="955" alt="Demonstração da Aplicação" src="https://github.com/user-attachments/assets/cd28e4f2-43b5-4a6b-bd59-eef3b9ca446a" />
</em>
  <br>
  <br>
</div>

---

### Sobre o Projeto

Este projeto foi criado como uma solução simples para a gestão de tarefas diárias. O seu principal objetivo é servir como uma peça de portfólio, demonstrando competências essenciais em desenvolvimento de software, incluindo:

* **Desenvolvimento Front-end:** Construção de uma interface de utilizador reativa e intuitiva com React.
* **Desenvolvimento Back-end:** Criação de uma API RESTful robusta com Node.js e Express para gerir a lógica de negócio.
* **Gestão de Base de Dados:** Integração com uma base de dados relacional (MySQL) para a persistência e manipulação de dados.
* **Comunicação Full-Stack:** Implementação da comunicação assíncrona entre o cliente e o servidor.

### Funcionalidades Principais

* **Gestão de Tarefas:** Adicione, edite, visualize e apague tarefas.
* **Controle de Estado:** Marque tarefas como "pendentes" ou "concluídas" com um único clique.
* **Persistência de Dados:** As tarefas são guardadas de forma segura numa base de dados MySQL.
* **Interface Limpa:** Design minimalista e focado na experiência do utilizador.

---

### 🛠️ Tech Stack

| Categoria      | Tecnologia                                                                                             |
| -------------- | ------------------------------------------------------------------------------------------------------ |
| **Front-End** | `React.js`, `Axios`, `CSS3`                                                                            |
| **Back-End** | `Node.js`, `Express.js`, `CORS`, `Dotenv`                                                              |
| **Base de Dados** | `MySQL` (com o driver `mysql2`)                                                                             |

---

### 🚀 Começar

Para executar este projeto localmente, siga os passos abaixo.

#### **Pré-requisitos**

* **Node.js** (v14 ou superior)
* **MySQL** (servidor local a correr)
* **Git**

#### **Guia de Instalação**

1.  **Clone o repositório para a sua máquina local:**
    ```sh
    git clone [https://github.com/GenisonLeal/ToDoListAPP.git](https://github.com/GenisonLeal/ToDoListAPP.git)
    cd ToDoListAPP
    ```

2.  **Configure e inicie o Back-end:**
    * Navegue para a pasta `backend` e instale as dependências:
        ```sh
        cd backend
        npm install
        ```
    * Crie o seu ficheiro de ambiente a partir do exemplo:
        ```sh
        cp .env.example .env
        ```
    * **Edite o ficheiro `.env`** com as suas credenciais do MySQL.
    * Execute o script `database_setup.sql` no seu cliente MySQL para criar a base de dados.
    * Inicie o servidor:
        ```sh
        npm start
        ```
    *O back-end estará disponível em `http://localhost:3001`.*

3.  **Configure e inicie o Front-end:**
    * Abra **um novo terminal** na raiz do projeto.
    * Navegue para a pasta `frontend` e instale as dependências:
        ```sh
        cd frontend
        npm install
        ```
    * Inicie a aplicação cliente:
        ```sh
        npm start
        ```
    *O front-end estará disponível em `http://localhost:3000`.*

---

### Autor

**Genison Leal**

* **GitHub:** [@GenisonLeal](https://github.com/GenisonLeal)
* **LinkedIn:** [@GenisonLeal](https://www.linkedin.com/in/genisonleal)
```eof
