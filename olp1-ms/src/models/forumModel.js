const { pool } = require('../config/database');

exports.getAll = async () => {
  const query = `SELECT * FROM comments`;
  const { rows } = await pool.query(query);
  return rows;
};

exports.newComment = async (comment_id, module_id, content, user_id) => {
  const query =
    'INSERT INTO comments (comment_id, module_id, content, user_id) VALUES ($1, $2, $3, $4)';
  const response = await pool.query(query, [
    comment_id,
    module_id,
    content,
    user_id,
  ]);
  return response;
};


