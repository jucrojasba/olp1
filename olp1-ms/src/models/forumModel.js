const { pool } = require('../config/database');

exports.getAll = async () => {
    const query = `SELECT * FROM comments`;
    const { rows } = await pool.query(query);
    return rows;
  }

exports.newComment = async (req, res) => {
    const { comment_id, module_id, content, user_id } = req.body;
    const query = 'INSERT INTO comments (comment_id, module_id, content, date, user_id) VALUES ($1, $2, $3, $4, $5)';
    const date = new Date();
    const response = await pool.query(query, [comment_id, module_id, content, date, user_id])
    res.json({message: 'Comentario insertado correctamente'})
   }