# Saffron Restaurant API

Backend API for the **Saffron Restaurant** full-stack platform.

It manages restaurant products, customer orders, table reservations, and protected admin operations.

## Features

- REST API built with NestJS and TypeScript
- PostgreSQL database with TypeORM
- Docker database environment
- Dynamic restaurant menu products
- Customer order creation
- Customer table reservations
- Admin authentication with JWT
- Protected admin routes
- Reservation management
- Order status management
- CORS enabled for the Next.js frontend

## Tech Stack

- NestJS
- TypeScript
- PostgreSQL
- TypeORM
- Docker and Docker Compose
- JWT Authentication
- bcrypt
- class-validator

## Related Frontend Repository

The frontend is available here:

[View Saffron Restaurant Frontend](https://github.com/Abdulrhman-Majthoub/saffron-restaurant-frontend)

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/auth/login` | Admin login and JWT token generation |

### Products

| Method | Endpoint | Description |
|---|---|---|
| GET | `/products` | Get all available restaurant products |

### Reservations

| Method | Endpoint | Description |
|---|---|---|
| POST | `/reservations` | Create a table reservation |
| GET | `/reservations` | Get all reservations — Admin only |
| PATCH | `/reservations/:id` | Update a reservation — Admin only |
| DELETE | `/reservations/:id` | Delete a reservation — Admin only |

### Orders

| Method | Endpoint | Description |
|---|---|---|
| POST | `/orders` | Create a customer order |
| GET | `/orders` | Get all orders — Admin only |
| PATCH | `/orders/:id/status` | Update order status — Admin only |

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Abdulrhman-Majthoub/saffron-restaurant-api.git
cd saffron-restaurant-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create the environment file

Create a file named `.env` in the project root:

```env
JWT_SECRET=change_this_to_a_secure_secret
ADMIN_EMAIL=admin@saffron.am
ADMIN_PASSWORD=change_this_password
```

> Never upload the `.env` file to GitHub.

### 4. Start PostgreSQL with Docker

```bash
docker compose up -d
```

The PostgreSQL database runs through Docker on port `5433`.

### 5. Start the API

```bash
npm run start:dev
```

The API will run on:

```text
http://localhost:3001
```

## Project Structure

```text
src/
  auth/           Admin authentication and JWT protection
  orders/         Customer orders and order status management
  products/       Restaurant menu products
  reservations/   Table reservation management
  app.module.ts   Main application module
  main.ts         API bootstrap and CORS configuration
```

## Future Improvements

- HyperPay or PayTabs online payment integration
- Payment webhook verification
- Email confirmations for orders and reservations
- Delivery address and delivery zone support
- Admin analytics dashboard
- Product availability management
- Production deployment

## Author

Built by Abdulrahman Majthoub as a full-stack portfolio project.