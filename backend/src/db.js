const mysql = require('mysql2/promise');
// Importa o dotenv para carregar variáveis de ambiente do ficheiro .env
require('dotenv').config();

// Cria um "pool" de conexões com a base de dados
// Usar um pool é mais eficiente do que criar uma nova conexão para cada query
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true, // Espera por uma conexão se todas estiverem em uso
  connectionLimit: 10,       // Número máximo de conexões no pool
  queueLimit: 0              // Fila ilimitada para queries pendentes
});

// Exporta o pool de conexões para ser usado em outros ficheiros
module.exports = pool;