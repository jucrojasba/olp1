const { pool } = require('../config/database');

// Function to get all modules
exports.getAll = async () => {
  // Define the SQL query to select all records from the 'modules' table
  const query = 'SELECT * FROM modules';
  // Execute the query and get the results
  const { rows } = await pool.query(query);
  // Return the fetched rows
  return rows;
};

// Function to save a new module
exports.save = async (language_id, name, description, content) => {
  const query = 'INSERT INTO modules (language_id, name, description, content) VALUES ($1, $2, $3, $4)';
  const response = await pool.query(query, [language_id, name, description, content]);
  return response;
};

// Function to get modules by language ID
exports.getByLanguage = async (language_id) => {
  const query = 'SELECT * FROM modules WHERE language_id = $1';
  const { rows } = await pool.query(query, [language_id]);
  return rows[0];
}

// Function to get a module by its ID
exports.getById = async (id) => {
  const query = 'SELECT * FROM modules WHERE id = $1';
  const { rows } = await pool.query(query, [id]);
  return rows;
}

// Function to update an existing module
exports.update = async (name, description, content, id) => {
  const query = `UPDATE modules SET name = $1, description = $2, content = $3 WHERE id = $4 RETURNING *`;
  const response = await pool.query(query, [name, description, content, id]);
  return response;
}

// Function to delete a module by its ID
exports.deleteModule = async (id) => {
  const query = 'DELETE FROM modules WHERE id = $1';
  await pool.query(query, [id]);
}