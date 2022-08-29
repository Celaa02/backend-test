import { Pool } from "pg";

const pool = new Pool(
    {
      host: 'localhost',
      user: 'postgres',
      password: '12345',
      database: 'users',
      port: '5432'

    }
)

pool.connect(function(err) {
    if (err) throw err;
    console.log("Connected db users!");
  });

  export default pool;