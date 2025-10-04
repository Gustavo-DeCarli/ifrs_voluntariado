# IFRS Voluntariado

Este projeto é uma plataforma para gerenciar e conectar voluntários a ações sociais, focada na comunidade do Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul (IFRS). A aplicação é dividida em **frontend** (React) e **backend** (Node.js com Express).

---

## Tecnologias Utilizadas

### Backend
- **Node.js:** Ambiente de execução.
- **Express:** Framework web para o backend.
- **MYSQL:** Banco de dados relacional.
- **JWT (JSON Web Token):** Autenticação segura.
- **Swagger (OpenAPI):** Documentação da API.

### Frontend
- **React:** Biblioteca JavaScript para a interface de usuário.
- **Vite:** Ferramenta de build para o desenvolvimento rápido.
- **React Router:** Gerenciamento de rotas.
- **Axios:** Cliente HTTP para comunicação com a API.
- **ESLint & Prettier:** Padrões de código e formatação.

---

## Instalação e Execução

### Backend

```bash
cd backend
npm install
npm run dev

### Frontend

```bash
cd frontend
npm install
npm run dev

---

## Rotas

### Backend

```bash
Auth
POST	/login	Realiza o login do usuário

Events
GET	/events	Retorna a lista de eventos públicos
POST	/events	Cria um novo evento
PUT	/events/{id}	Atualiza os detalhes de um evento
DELETE	/events/{id}	Exclui um evento pelo ID
GET	/events/subscribes	Lista de inscrições em eventos
POST	/events/{idEvent}/user/{idUser}	Inscreve um usuário em um evento
DELETE	/events/{idEvent}/user/{idUser}	Remove inscrição de um usuário

Admin
GET	/admin	Retorna dados do usuário admin

Users
GET	/users	Retorna lista de usuários
POST	/users	Cria um novo usuário
PUT	/users/{id}	Atualiza um usuário existente
DELETE	/users/{id}	Exclui um usuário pelo ID

### Frontend

```Páginas Públicas

/events – Lista de eventos


Páginas Protegidas (Requer Login)

/dashboard – Painel do usuário

/Admin – Painel administrativo (admin)

/IncluirEvento – Criar evento (admin)

/EditarEvento/:id – Editar evento (admin)

/Users – Lista de usuários (admin)

/IncluirUser – Criar usuário (admin)

/EditarUser/:id – Editar usuário (admin)