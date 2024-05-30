const { pool } = require('../config/database');

exports.getAll = async () => {
  const query = 'SELECT * FROM modules';
  const { rows } = await pool.query(query);
  return rows;
};
exports.save = async (language_id, name, description, content) => {
  const query = 'INSERT INTO modules (language_id, name, description, content) VALUES ($1, $2, $3, $4)';
  const response = await pool.query(query, [language_id, name, description, content]);
  return response;
};

exports.getByLanguage = async (language_id) => {
  const query = 'SELECT * FROM modules WHERE language_id = $1';
  const { rows } = await pool.query(query, [language_id]);
  return rows;
}

exports.getById = async (id) => {
  const query = 'SELECT * FROM modules WHERE id = $1';
  const { rows } = await pool.query(query, [id]);
  return rows;
}

exports.update = async (name, description, content, id) => {
  const query = `UPDATE modules SET name = $1, description = $2, content = $3 WHERE id = $4 RETURNING *`;
  const response = await pool.query(query, [name, description, content, id]);
  return response;
}

exports.deleteModule = async (id) => {
  const query = 'DELETE FROM modules WHERE id = $1';
  await pool.query(query, [id]);
}