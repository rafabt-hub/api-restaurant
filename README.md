# API - Restaurant System 🍽️

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Tech](https://img.shields.io/badge/tech-Node.js%20%26%20Express-68A063?logo=node.js)

A robust RESTful API for a restaurant management system, built with Node.js, Express, and Prisma. It handles products, categories, tables, and a complete order lifecycle, featuring real-time updates with Socket.IO.

## ✨ Features

-   **Full Menu Management:** CRUD operations for `Products` and `Categories`.
-   **Table Management:** Create and manage restaurant tables.
-   **Complete Order Flow:** Create new orders, list them, and manage their status (e.g., waiting, in production, done).
-   **Real-time Updates:** Uses **Socket.IO** to instantly notify clients of new orders or status changes.
-   **Secure User Authentication:** Manages user accounts with JWT for secure access.
-   **Product Image Uploads:** Supports file uploads for product images using Multer.

## 🛠️ Tech Stack

-   **Runtime:** [Node.js](https://nodejs.org/)
-   **Framework:** [Express.js](https://expressjs.com/pt-br/)
-   **Real-time Engine:** [Socket.IO](https://socket.io/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **ORM:** [Prisma](https://www.prisma.io/)
-   **Database:** [PostgreSQL](https://www.postgresql.org/)
-   **Authentication:** [JSON Web Token (JWT)](https://jwt.io/) & [Bcrypt](https://www.npmjs.com/package/bcrypt)
-   **File Uploads:** [Multer](https://github.com/expressjs/multer)

## 🚀 Getting Started

To run this project locally, you'll need Node.js, npm, and a running PostgreSQL instance.

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/rafabt-hub/api-restaurant.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd api-restaurant
    ```
3.  **Install dependencies:**
    ```sh
    npm install
    ```
4.  **Set up environment variables:**
    Create a `.env` file in the root directory and add your database connection string and JWT secret.
    ```.env
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
    JWT_SECRET="your-super-secret-key"
    ```
    *Replace the values with your PostgreSQL credentials and a secret key of your choice.*

5.  **Run database migrations:**
    This will create the necessary tables in your database.
    ```sh
    npx prisma migrate dev
    ```
6.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The API will be available at `http://localhost:3333`.

## 📄 License

This project is licensed under the MIT License.

---

<details>
  <summary>🇧🇷 Ver em Português</summary>

  <br>

  > Uma API RESTful robusta para um sistema de gerenciamento de restaurante, construída com Node.js, Express e Prisma. Gerencia produtos, categorias, mesas e um ciclo de vida completo de pedidos, com atualizações em tempo real via Socket.IO.

  ### ✨ Funcionalidades

  -   **Gerenciamento de Cardápio:** Operações CRUD para `Produtos` e `Categorias`.
  -   **Gerenciamento de Mesas:** Crie e gerencie as mesas do restaurante.
  -   **Fluxo Completo de Pedidos:** Crie novos pedidos, liste-os e gerencie seus status (ex: aguardando, em produção, pronto).
  -   **Atualizações em Tempo Real:** Usa **Socket.IO** para notificar clientes instantaneamente sobre novos pedidos ou mudanças de status.
  -   **Autenticação Segura de Usuários:** Gerencia contas de usuário com JWT para acesso seguro.
  -   **Upload de Imagens de Produtos:** Suporte para upload de imagens de produtos usando Multer.

  ### 🚀 Como Executar

  Para rodar este projeto, você precisará do Node.js, npm e uma instância do PostgreSQL ativa.

  1.  **Clone o repositório.**
  2.  **Navegue até a pasta do projeto.**
  3.  **Instale as dependências:** `npm install`.
  4.  **Configure as variáveis de ambiente:** Crie um arquivo `.env` na raiz e adicione sua string de conexão do banco e um segredo para o JWT.
  5.  **Execute as migrações do banco:** `npx prisma migrate dev`.
  6.  **Inicie o servidor:** `npm run dev`. A API estará rodando em `http://localhost:3333`.

</details>
