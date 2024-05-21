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

exports.updateChallenge = async (id, data) => {
  const query = `UPDATE challenges
                 SET name = $1, content = $2, section_type = $3, period_type = $4, points_to_give = $5, is_random = $6, language_id = $7
                 WHERE id = $8
                 RETURNING *`;
  const values = [data.name, data.content, data.section_type, data.period_type, data.points_to_give, data.is_random, data.language_id, id];
  const { rows } = await pool.query(query, values);
  return rows;
}


