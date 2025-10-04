# IFRS Voluntariado  volontariado-ifrs-react-node

![Licença](https://img.shields.io/badge/licença-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow.svg)

Uma plataforma completa para gerenciar e conectar voluntários a ações sociais, focada na comunidade do Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul (IFRS).

---

## 📜 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [✨ Funcionalidades](#-funcionalidades)
- [🚀 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [🏁 Começando](#-começando)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
- [API Endpoints](#-api-endpoints)
- [🧭 Rotas do Frontend](#-rotas-do-frontend)
- [🤝 Como Contribuir](#-como-contribuir)
- [📄 Licença](#-licença)

---

## 📖 Sobre o Projeto

O **IFRS Voluntariado** nasceu da necessidade de centralizar e facilitar a organização de ações sociais e projetos de voluntariado dentro da comunidade do IFRS. A plataforma permite que administradores criem e gerenciem eventos, enquanto os usuários podem visualizar e se inscrever nas ações de seu interesse, promovendo o engajamento e a participação social.

A aplicação é construída com uma arquitetura moderna, dividida em:
-   **Frontend:** Uma interface de usuário reativa e dinâmica construída com **React**.
-   **Backend:** Uma API RESTful robusta desenvolvida com **Node.js** e **Express**.

---

## ✨ Funcionalidades

-   **Autenticação de Usuários:** Sistema seguro de login com JWT.
-   **Gerenciamento de Eventos:** Administradores podem criar, visualizar, atualizar e excluir eventos.
-   **Inscrição em Eventos:** Usuários podem se inscrever e cancelar a inscrição em eventos disponíveis.
-   **Painel Administrativo:** Área restrita para gerenciamento completo de usuários e eventos.
-   **Listagem Pública de Eventos:** Visitantes podem visualizar os eventos sociais abertos.
-   **Documentação de API:** A API do backend é documentada com Swagger (OpenAPI) para facilitar a integração e o desenvolvimento.

---

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido com as seguintes tecnologias:

### **Backend**

| Tecnologia | Descrição |
| :--- | :--- |
| **Node.js** | Ambiente de execução JavaScript no servidor. |
| **Express** | Framework web para a construção da API. |
| **MySQL** | Banco de dados relacional para armazenamento de dados. |
| **JWT** | Geração e validação de tokens para autenticação. |
| **Swagger** | Documentação interativa da API (OpenAPI). |
| **Nodemon** | Monitora alterações no código e reinicia o servidor. |

### **Frontend**

| Tecnologia | Descrição |
| :--- | :--- |
| **React** | Biblioteca para construção de interfaces de usuário. |
| **Vite** | Ferramenta de build extremamente rápida para o frontend. |
| **React Router** | Biblioteca para gerenciamento de rotas (navegação). |
| **Axios** | Cliente HTTP para comunicação com a API do backend. |
| **ESLint & Prettier**| Ferramentas para garantir a padronização e formatação do código. |

---

## 🏁 Começando

Siga estas instruções para obter uma cópia do projeto em funcionamento na sua máquina local para desenvolvimento e testes.

### Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:
-   [Node.js](https://nodejs.org/en/) (que inclui o npm)
-   [Git](https://git-scm.com/)
-   Um servidor de banco de dados **MySQL**.

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/ifrs-voluntariado.git](https://github.com/seu-usuario/ifrs-voluntariado.git)
    cd ifrs-voluntariado
    ```

2.  **Configuração do Backend:**
    ```bash
    cd backend
    npm install
    ```

3.  **Configuração do Frontend:**
    ```bash
    cd ../frontend
    npm install
    ```

4.  **Executando a Aplicação:**
    -   Para iniciar o servidor backend (na pasta `backend`):
        ```bash
        npm run dev
        ```
    -   Para iniciar o cliente frontend (na pasta `frontend`):
        ```bash
        npm run dev
        ```

---

## API Endpoints

A seguir, a lista de endpoints disponíveis na API.

### Autenticação

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `POST` | `/login` | Realiza o login do usuário e retorna um token JWT. |

### Eventos

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `GET` | `/events` | Retorna a lista de todos os eventos públicos. |
| `POST` | `/events` | Cria um novo evento (requer autenticação de admin). |
| `PUT` | `/events/{id}` | Atualiza os detalhes de um evento específico. |
| `DELETE`| `/events/{id}` | Exclui um evento pelo seu ID. |
| `GET` | `/events/subscribes` | Retorna a lista de inscrições em eventos. |
| `POST` | `/events/{idEvent}/user/{idUser}` | Inscreve um usuário em um evento. |
| `DELETE`| `/events/{idEvent}/user/{idUser}` | Remove a inscrição de um usuário. |

### Usuários

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `GET` | `/users` | Retorna a lista de todos os usuários (requer admin). |
| `POST` | `/users` | Cria um novo usuário. |
| `PUT` | `/users/{id}` | Atualiza os dados de um usuário existente. |
| `DELETE`| `/users/{id}` | Exclui um usuário pelo seu ID. |

### Admin

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `GET` | `/admin` | Retorna dados do perfil do administrador logado. |

---

## 🧭 Rotas do Frontend

As principais rotas da interface do usuário estão estruturadas da seguinte forma:

### Páginas Públicas

| Rota | Descrição |
| :--- | :--- |
| `/events`| Exibe a lista de todos os eventos disponíveis. |

### Páginas Protegidas (Requer Login)

| Rota | Descrição | Acesso |
| :--- | :--- | :--- |
| `/dashboard` | Painel principal do usuário com seus eventos. | Usuário / Admin |
| `/admin` | Painel de controle administrativo. | Admin |
| `/incluir-evento` | Formulário para criar um novo evento. | Admin |
| `/editar-evento/:id`| Formulário para editar um evento existente. | Admin |
| `/users` | Tabela com a lista de todos os usuários. | Admin |
| `/incluir-user` | Formulário para criar um novo usuário. | Admin |
| `/editar-user/:id` | Formulário para editar um usuário existente. | Admin |
