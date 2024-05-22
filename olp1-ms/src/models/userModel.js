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
                 SET username = $1, email = $2, password = $3
                 WHERE id = $4
                 RETURNING id, username, email`;
  const values = [data.username, data.email, data.password, id];
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
