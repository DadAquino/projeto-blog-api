# API de Blogs - Desenvolvimento de API RESTful

Este projeto envolve a criação de uma API RESTful para gerenciar o conteúdo de um blog.  A API permite a criação, leitura, atualização e exclusão (CRUD) de usuários, categorias e posts.  A autenticação é implementada usando JWT (JSON Web Tokens) para garantir a segurança das rotas. O banco de dados é gerenciado com o Sequelize, um ORM (Object-Relational Mapping) para Node.js, utilizando MySQL.

## Descrição do Projeto

O objetivo principal deste projeto é desenvolver uma API completa para um sistema de blog, incluindo:

* **Gerenciamento de Usuários:** Criação, leitura e listagem de usuários.
* **Gerenciamento de Categorias:** Criação e listagem de categorias.
* **Gerenciamento de Posts:** Criação, leitura, atualização e exclusão de posts, incluindo a associação com usuários e categorias.
* **Autenticação:** Implementação de login com geração de JWT para proteger rotas sensíveis.
* **Banco de Dados:** Utilização do MySQL para persistência dos dados, com o Sequelize para facilitar a interação.

## Tecnologias Utilizadas

* **Node.js:** Ambiente de execução JavaScript para o backend.
* **Express:** Framework web para Node.js, utilizado para criar a API.
* **Sequelize:** ORM para Node.js, facilitando a interação com o banco de dados MySQL.
* **MySQL:** Sistema de gerenciamento de banco de dados relacional.
* **JWT (JSON Web Token):** Padrão para criação de tokens de acesso seguros.
* **Docker (Opcional):** Para conteinerização e simplificação do ambiente de desenvolvimento.
* **Jest:** Framework de testes JavaScript.
* **ESLint:** Linter para garantir a qualidade do código.

## Como Executar o Projeto

Para executar o projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone <seu_repositorio_aqui>
    cd <nome_do_repositorio>
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configurar o banco de dados:**
    * Certifique-se de ter o MySQL instalado e em execução.
    * Crie um arquivo `.env` na raiz do projeto, seguindo o exemplo do arquivo `.env.example`, e configure as variáveis de ambiente do banco de dados (host, port, user, password, database name).

4.  **Executar as Migrações:**
    ```bash
    npx sequelize-cli db:create
    npx sequelize-cli db:migrate
    npx sequelize-cli db:seed:all  # Para popular o banco com dados iniciais (se necessário)
    ```

5.  **Iniciar o servidor:**
    ```bash
    npm run dev  # Para modo de desenvolvimento com hot-reload
    # ou
    npm start  # Para modo de produção
    ```

6.  **Executar os testes (Opcional):**
    ```bash
    npm test  # Executa todos os testes
    ```

**Observações Importantes:**

* Certifique-se de que o MySQL esteja rodando na porta e host configurados.
* O arquivo `.env` é crucial para configurar a conexão com o banco de dados.
* Os scripts `npm run dev` e `npm start` estão definidos no `package.json`.
* Para executar com Docker, consulte o README original do projeto para instruções detalhadas.

Este README fornece um guia básico para iniciar e executar o projeto.  Consulte a documentação adicional e os comentários no código para obter mais detalhes sobre a implementação e os endpoints da API.
