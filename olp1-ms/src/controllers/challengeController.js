// Import required functions from the challengeModel module
const {
  getAll,
  getByLanguage,
  save,
  update,
  deleteChallenge,
  findById,
} = require('../models/challengeModel');

// Controller function to get all challenges
exports.getAll = async (req, res) => {
  try {
    // Call the getAll function from the challengeModel 
    const challenges = await getAll();
    // Respond with a 200 OK status and the challenges in JSON format
    res.status(200).json(challenges);
  } catch (err) {
    // Shoe any errors and respond with a 500 Internal Server Error status and an error message
    console.error('Error en getAllChallenges:', err);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

// Controller function to get challenges by language ID
exports.getByLanguage = async (req, res) => {
  try {
    // Extract the language ID from the request parameters
    const language_id = req.params.language_id;
    const challenges = await getByLanguage(language_id);
    res.status(200).json(challenges);
  } catch (err) {
    console.error('Error en getChallengesByLanguage: ', err);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

// Controller function to save a new challenge
exports.save = async (req, res) => {
  try {
    // Destructure request body to extract required fields
    const { name, content, section_type, period_type, points_to_give, is_random, language_id } = req.body;
    // Check if required fields are provided
    if (!name || !content) {
      return res
        .status(400)
        .json({ message: 'Todos los campos son requeridos' });
    }
    await save( name, content, section_type, period_type, points_to_give, is_random, language_id );
    return res.status(201).json({ message: 'Reto creado exitosamente' });
  } catch (err) {
    console.error('Error en newChallenge: ', err);
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};

// Controller function to update an existing challenge
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, content, section_type, period_type, points_to_give, is_random, language_id } = req.body;

    // Check if the challenge exists
    const challenge = await findById(id);
    if (!challenge) {
      return res.status(400).json({ message: 'El reto no fue encontrado' });
    }

    await update(id, {
      name,
      content,
      section_type,
      period_type,
      points_to_give,
      is_random,
      language_id
    });
    res.status(200).json({ message: 'Reto actualizado exitosamente' });
  } catch (err) {
    console.error('Error enupdate: ', err);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

// Controller function to delete a challenge
exports.deleteChallenge = async (req, res) => {
  try {
    const { id } = req.params;

    const challenge = await findById(id);
    if (!challenge) {
      return res.status(400).json({ message: 'El reto no fue encontrado' });
    }

    await deleteChallenge(id);
    res.status(200).json({ message: 'Reto eliminado exitosamente' });
  } catch (err) {
    console.error('Error en deleteChallenge: ', err);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};
