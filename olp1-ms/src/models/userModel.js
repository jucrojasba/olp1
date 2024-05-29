const { pool } = require("../config/database");

exports.getAll = async () => {
  const query = `SELECT * FROM users`;
  const { rows } = await pool.query(query);
  return rows;
};

exports.save = async (name, hashedPassword, email, points) => {
  const query = `INSERT INTO users (name, password, email, points)
                 VALUES ($1, $2, $3, $4)
                 RETURNING *`;
  const values = [name, hashedPassword, email, points];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

exports.update = async (id, data) => {
  const query = `UPDATE users
                 SET name = $1, password = $2, email = $3, points = $4
                 WHERE id = $5
                 RETURNING *`;
  const values = [data.name, data.password, data.email, data.points, id];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

exports.deleteUser = async (id) => {
  const query = `DELETE FROM users WHERE id = $1`;
  await pool.query(query, [id]);
};

exports.findByEmail = async (email) => {
  const query = `SELECT * FROM users WHERE email = $1`;
  const { rows } = await pool.query(query, [email]);
  return rows[0];
};

exports.findById = async (id) => {
  const query = `SELECT * FROM users WHERE id = $1`;
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};

exports.updateSome = async (id, key, newValue) => {
  const validColumns = ['name', 'email', 'password', 'points']; 
  if (!validColumns.includes(key)) {
    throw new Error('Nombre de columna no válido');
  }
  const query = `UPDATE users SET ${key} = $1 WHERE id = $2`;
  const { rows } = await pool.query(query, [newValue, id]);
  return rows;
}
