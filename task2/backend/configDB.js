const mysql = require('mysql2/promise');

let pool; 

async function createPoolConfig() {
  // ... your database configuration logic
  return {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE_NAME,
  };
}

async function initPool() {
  const config = await createPoolConfig();
  pool = await mysql.createPool(config);
}

async function getConnection() {
  if (!pool) {
    await initPool();
  }
  return pool.getConnection();
}

module.exports = { getConnection };