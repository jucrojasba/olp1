const { pool } = require('../config/database');

// Function to get all challenges
exports.getAll = async () => {
  // Define the SQL query to select all records from the 'challenges' table
  const query = `SELECT * FROM challenges`;
  // Execute the query and get the results
  const { rows } = await pool.query(query);
  return rows;
};

// Function to get challenges by language ID
exports.getByLanguage = async (language_id) => {
  const query = 'SELECT * FROM challenges WHERE language_id = $1';
  const { rows } = await pool.query(query, [language_id]);
  return rows;
};

// Function to save a new challenge
exports.save = async (
  name,
  content,
  section_type,
  period_type,
  points_to_give,
  is_random,
  language_id
) => {
  const query =
    'INSERT INTO challenges (name, content, section_type, period_type, points_to_give, is_random, language_id) VALUES ($1, $2, $3, $4, $5, $6, $7)';
  const response = await pool.query(query, [
    name,
    content,
    section_type,
    period_type,
    points_to_give,
    is_random,
    language_id,
  ]);
  return response;
};

// Function to update an existing challenge
exports.update = async (id, data) => {
  const query = `UPDATE challenges
                 SET name = $1, content = $2, section_type = $3, period_type = $4, points_to_give = $5, is_random = $6, language_id = $7
                 WHERE id = $8
                 RETURNING *`;
  const values = [
    data.name,
    data.content,
    data.section_type,
    data.period_type,
    data.points_to_give,
    data.is_random,
    data.language_id,
    id,
  ];
  const { rows } = await pool.query(query, values);
  return rows;
};

// Function to delete a challenge by its ID
exports.deleteChallenge = async (id) => {
  const query = 'DELETE FROM challenges WHERE id = $1';
  await pool.query(query, [id]);
};

// Function to find a challenge by its ID
exports.findById = async (id) => {
  const query = `SELECT * FROM challenges WHERE id = $1`;
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};
