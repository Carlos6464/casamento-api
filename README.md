# Casamento API

REST API that powers a wedding website: guests can **confirm attendance (RSVP)**, **pick a gift from the registry**, and **leave a message** for the couple, while the couple can export PDF reports of everything collected.

**Live:** https://casamento-api-qj7i.vercel.app

## Features

- **Gift registry** — lists only the gifts that are still available; reserving a gift marks it as taken and rejects a second reservation of the same item.
- **Gift lookup** — search reserved gifts by guest name, e-mail or CPF.
- **RSVP** — guests register name, e-mail, phone and number of people attending.
- **Guest book** — guests leave a message (validated, max. 200 characters).
- **PDF reports** — generated on demand for confirmed gifts, RSVPs and messages.
- **Request validation** — every payload is validated with `class-validator` and invalid requests are rejected with clear error messages.

## Tech stack

| Area | Technology |
| --- | --- |
| Framework | NestJS 10 (Node.js, TypeScript) |
| Database | PostgreSQL |
| ORM / migrations | Prisma 6 |
| Validation | class-validator, class-transformer |
| Reports | PDFKit |
| Tests | Jest, Supertest |
| Deploy | Vercel |

## Data model

```
Presente   id, nome, link, preco, nome_user, email_user, cpf_user, status
Presenca   id, nome, email, telefone, qt_pessoas, status
Recado     id, nome, email, recado
```

Schema and migrations live in [`prisma/`](./prisma).

## Endpoints

### Gifts — `/presente`

| Method | Route | Description |
| --- | --- | --- |
| `GET` | `/presente` | List gifts that are still available |
| `PATCH` | `/presente/:id` | Reserve a gift (returns `400` if it was already taken) |
| `GET` | `/presente/confirm?search=` | Search reserved gifts by name, e-mail or CPF |
| `GET` | `/presente/relatorio` | Download the confirmed gifts report (PDF) |

### RSVP — `/presenca`

| Method | Route | Description |
| --- | --- | --- |
| `POST` | `/presenca` | Register an attendance confirmation |
| `GET` | `/presenca` | List confirmations |
| `GET` | `/presenca/relatorio` | Download the RSVP report (PDF) |

### Messages — `/recado`

| Method | Route | Description |
| --- | --- | --- |
| `POST` | `/recado` | Leave a message |
| `GET` | `/recado` | List messages |
| `GET` | `/recado/relatorio` | Download the messages report (PDF) |

### Example

```bash
curl -X POST https://casamento-api-qj7i.vercel.app/presenca \
  -H "Content-Type: application/json" \
  -d '{"nome": "Maria Silva", "email": "maria@example.com", "telefone": "22999999999", "qt_pessoas": 2}'
```

## Getting started

**Requirements:** Node.js 18+ and a PostgreSQL database.

```bash
# 1. Install dependencies
npm install

# 2. Configure the environment
echo 'DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/casamento"' > .env

# 3. Create the tables
npx prisma migrate deploy

# 4. Run the API (http://localhost:3000)
npm run start:dev
```

### Environment variables

| Variable | Description |
| --- | --- |
| `DATABASE_URL` | PostgreSQL connection string |
| `PORT` | Server port (default `3000`) |

### Scripts

| Command | Description |
| --- | --- |
| `npm run start:dev` | Run in watch mode |
| `npm run build` | Compile the project |
| `npm run start:prod` | Run the compiled build |
| `npm run test` | Unit tests |
| `npm run test:e2e` | End-to-end tests |
| `npm run test:cov` | Test coverage |
| `npm run lint` | Lint and auto-fix |

## Project structure

```
src/
├── presente/   # gift registry (controller, service, DTOs, PDF report)
├── presenca/   # RSVP
├── recado/     # guest book messages
├── prisma/     # Prisma module and service
└── main.ts     # bootstrap (CORS, global validation)
prisma/
├── schema.prisma
└── migrations/
```

Each feature is its own NestJS module (controller → service → Prisma), which keeps routes, business rules and data access separated.

## Author

**Carlos Adriano Sodré Araújo** — Software Engineer (Backend)
[LinkedIn](https://www.linkedin.com/in/carlosadrianosodrearaujo6464)
