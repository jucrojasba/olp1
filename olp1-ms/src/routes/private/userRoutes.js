const express = require('express');
const { getAll, getById, update, deleteUser, updateSome } = require('../../controllers/userController');

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', deleteUser);
router.patch('/:id', updateSome);


module.exports = router;
