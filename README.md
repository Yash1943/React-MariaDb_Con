# React + Node.js + MariaDB Full Stack App

This project is a simple full stack application with a React frontend and a Node.js (Express) backend using MariaDB as the database and Sequelize as the ORM. The backend is managed with `sequelize-cli` for migrations and models.

---

## Project Structure

```
/ (root)
  /frontend   # React app (client)
  /backend    # Node.js + Express + MariaDB (API server)
```

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MariaDB](https://mariadb.org/) server running locally or remotely

---

## Backend Setup (`/backend`)

1. **Install dependencies:**

   ```bash
   cd backend
   npm install
   ```

2. **Configure the database:**

   - Edit `backend/config/config.json` with your MariaDB credentials and database name.
   - Example (default):
     ```json
     {
       "development": {
         "username": "root",
         "password": "your_password",
         "database": "react_mariadb_db",
         "host": "127.0.0.1",
         "dialect": "mariadb"
       }
     }
     ```

3. **Create the database:**

   - Log in to MariaDB and run:
     ```sql
     CREATE DATABASE react_mariadb_db;
     ```

4. **Run migrations:**

   ```bash
   npx sequelize-cli db:migrate
   ```

5. **Start the backend server:**
   ```bash
   node index.js
   ```
   The backend will run on [http://localhost:3001](http://localhost:3001)

### API Endpoints

- `GET /users` — List all users
- `POST /users` — Create a new user (expects JSON: `{ name, email, password }`)

---

## Frontend Setup (`/frontend`)

1. **Install dependencies:**

   ```bash
   cd frontend
   npm install
   ```

2. **Start the React app:**
   ```bash
   npm start
   ```
   The frontend will run on [http://localhost:3000](http://localhost:3000)

---

## Connecting Frontend and Backend

- The frontend should make API requests to the backend at `http://localhost:3001`.
- You may need to configure proxy settings in `frontend/package.json` for development (see [Create React App Proxy](https://create-react-app.dev/docs/proxying-api-requests-in-development/)).

---

## Useful Commands

### Sequelize CLI (run in `/backend`):

- `npx sequelize-cli db:migrate` — Run migrations
- `npx sequelize-cli db:seed:all` — Run all seeders (if any)
- `npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string` — Example: generate a model

---

## Notes

- Ensure MariaDB is running before starting the backend.
- Update credentials in `config.json` as needed.
- For production, set up environment variables and secure your credentials.

---

## License

MIT
