const { getAll, newComment } = require('../models/forumModel');

exports.getAll = async (req, res) => {
  try {
    const comments = await getAll();
    res.status(200).json(comments);
  } catch (err) {
    console.error('Error en getAllComments:', err);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

exports.newComment = async (req, res) => {
  try {
    const { comment_id, module_id, content, user_id } = req.body;
    if (!content) {
      console.error('Llenar todos los campos');
      return res
        .status(400)
        .json({ message: 'Todos los campos son requeridos' });
    }

    await newComment(comment_id, module_id, content, user_id);
    return res.status(201).json({ message: 'Comentario añadido exitosamente' });
  } catch (err) {
    console.error('Error en newComment: ', err);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};
