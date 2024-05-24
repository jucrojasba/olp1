const express = require('express');
const { getAll, save, getByLanguage, getById, update, deleteModule } = require('../../controllers/moduleController');

const router = express.Router();

router.get('/', getAll);
router.post('/:language_id', save);
router.get('/:language_id', getByLanguage);
router.get('/id/:id', getById);
router.put('/:id', update);
router.delete('/:id', deleteModule);


module.exports = router;
