const express = require('express');
const { getAll } = require('../../controllers/challengeController');
const { getByLanguage } = require('../../models/challengeModel'); //Crea controlador para obtener reto por lenguaje
const { pool } = require('../../config/database')

const router = express.Router();

router.get('/', getAll)
router.get('/:language_id', getByLanguage)

module.exports = router;