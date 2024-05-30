const { Pool } = require('pg');  // Import the Pool class from the 'pg' module

// Verify if database if defined in .env file
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL no está definida en el archivo .env');
}

// Crerate pool instance with string connection to the database.
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Export the pool instance to make it available for use in other files.
module.exports = { pool };
