const { pool } = require('../config/database');

exports.getAll = async () => {
    const query = `SELECT * FROM challenges`;
    const { rows } = await pool.query(query);
    return rows;
  }

exports.getByLanguage = async (language_id) => {
  const query = 'SELECT * FROM challenges WHERE language_id = $1';
  const { rows } = await pool.query(query, [language_id]);    
  return rows;
}

exports.newChallenge = async (name, content, section_type, period_type, points_to_give, is_random, language_id) => {
  const query = 'INSERT INTO challenges (name, content, section_type, period_type, points_to_give, is_random, language_id) VALUES ($1, $2, $3, $4, $5, $6, $7)';
  const response = await pool.query(query, [name, content, section_type, period_type, points_to_give, is_random, language_id]);
  return response;
}