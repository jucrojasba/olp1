const { getAll } = require("../models/forumModel");

exports.getAll = async (req, res) => {
    try {
        const comments = await getAll();
        res.status(200).json(comments);
    } catch (err) {
        console.error('Error en getAllComments:', err);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}