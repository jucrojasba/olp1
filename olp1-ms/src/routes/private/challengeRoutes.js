const express = require('express');
const { getAll } = require('../../controllers/challengeController');
const { pool } = require('../../config/database')

const router = express.Router();

router.get('/', getAll)
router.get('/:language_id', async (req, res) => {
    const query = 'SELECT * FROM challenges WHERE language_id = $1';
    const { language_id } = req.params;
    const response = await pool.query(query, [language_id]);    
    res.status(200).json(response.rows);
})

module.exports = router;