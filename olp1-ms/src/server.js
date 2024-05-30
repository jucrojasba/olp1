require('dotenv').config(); // Import dotenv to load environment variables from .env file
const { pool } = require('./config/database'); //Import pool from database
const app = require('./app'); // Import the Express app instance

const port = process.env.PORT || 4000; //If port is not defined in .env file, use 4000

// Test database connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) { // Show the error and exit the process if there's an error connecting to the database
    console.error('Error al conectar a la base de datos:', err);
    process.exit(1);
  } else {
    console.log('Conexión a la base de datos exitosa:', res.rows);
    app.listen(port, () => {  // Start the Express app on the specified port, show the server url and port number.
      console.log(`Servidor ejecutándose en http://localhost:${port}`);
    });
  }
});
