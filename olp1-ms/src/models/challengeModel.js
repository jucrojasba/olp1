const { pool } = require('../config/database');

exports.getAll = async () => {
    const query = `SELECT * FROM challenges`;
    const { rows } = await pool.query(query);
    return rows;
  }

exports.getByLanguage = async (req, res) => {
  const query = 'SELECT * FROM challenges WHERE language_id = $1';
  const { language_id } = req.params;
  const response = await pool.query(query, [language_id]);    
  res.status(200).json(response.rows)
}