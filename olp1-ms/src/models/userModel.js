const { pool } = require("../config/database");

// Function to get all users from the database
exports.getAll = async () => {
  const query = `SELECT * FROM users`;   // Define the SQL query to select all users
  const { rows } = await pool.query(query);   // Execute the query using the pool and return the rows
  return rows;
};

// Function to save a new user to the database
exports.save = async (name, hashedPassword, email, points) => {
  const query = `INSERT INTO users (name, password, email, points, profile_picture_url)
                 VALUES ($1, $2, $3, $4, $5)
                 RETURNING *`;
  // Define the values to be inserted               
  const values = [name, hashedPassword, email, points, profile_picture_url];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

// Function to update an existing user in the database
exports.update = async (id, data) => {
  const query = `UPDATE users
                 SET name = $1, password = $2, email = $3, points = $4, profile_picture_url = $5
                 WHERE id = $6
                 RETURNING *`;
  const values = [data.name, data.password, data.email, data.points, data.profile_picture_url, id];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

// Function to delete a user from the database
exports.deleteUser = async (id) => {
  const query = `DELETE FROM users WHERE id = $1`;
  await pool.query(query, [id]);
};

// Function to find a user by email in the database
exports.findByEmail = async (email) => {
  const query = `SELECT * FROM users WHERE email = $1`;
  const { rows } = await pool.query(query, [email]);
  return rows[0];
};

// Function to find a user by id in the database
exports.findById = async (id) => {
  const query = `SELECT * FROM users WHERE id = $1`;
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};

// Function to update a specific column of a user in the database
exports.updateSome = async (id, key, newValue) => {
    // Define the valid columns that can be updated
  const validColumns = ['name', 'email', 'password', 'points', 'profile_picture_url']; 
    // Check if the key is a valid column
  if (!validColumns.includes(key)) {
    throw new Error('Nombre de columna no válido');
  }
  const query = `UPDATE users SET ${key} = $1 WHERE id = $2`;
  const { rows } = await pool.query(query, [newValue, id]);
  return rows;
}
