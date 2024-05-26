const { pool } = require('../config/database');

exports.getAll = async () => {
    const query = 'SELECT * FROM user_challenges';
    const { rows } = await pool.query(query);
    return rows;
}

exports.save = async (userId, challengeId, attempt, result, resolution_time) => {
    const query = 'INSERT INTO user_challenges (user_id, challenge_id, attempt, result, resolution_time) VALUES ($1, $2, $3, $4, $5)';
    const response = await pool.query(query, [userId, challengeId, attempt, result, resolution_time]);
    return response;
}