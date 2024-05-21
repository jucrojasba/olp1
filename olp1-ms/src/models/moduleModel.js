const { pool } = require('../config/database')

exports.newModule = async (req, res) => {
    const { language_id, name, description, content } = req.body;
    const query = 'INSERT INTO modules (language_id, name, description, content) VALUES ($1, $2, $3, $4)';
    const response = await pool.query(query, [language_id, name, description, content])
    res.json({message: 'Módulo insertado correctamente'})
}


