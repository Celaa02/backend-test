## Getting Started

First, install all packages:
```bash
npm install package.json
# or
yarn add package.json
```

Second, using the terminal PostgreSQL, create the database with the following commands:

```bash
CREATE DATABASE USERS;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(35),
    birthdate DATE,
    identificatenum numeric
);

INSERT INTO USERS (username, birthdate, identificatenum ) VALUES 
    ('Darly Vergara Alvarez', '1994-03-07', '12345678');
```

Next, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:4000](http://localhost:4000) with your browser to see the result.

