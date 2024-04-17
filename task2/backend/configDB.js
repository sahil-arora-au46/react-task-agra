const mysql = require('mysql2/promise');

let pool; 

async function createPoolConfig() {
  // ... your database configuration logic
  return {
    host: 'localhost',
    user: 'sahil',
    password: 'Bimla@8950',
    database: 'noteapp',
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