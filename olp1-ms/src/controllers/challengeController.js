const { getAll, getByLanguage, newChallenge } = require("../models/challengeModel");

exports.getAll = async (req, res) => {
    try {
        const challenges = await getAll();
        res.status(200).json(challenges);
    } catch (err) {
        console.error('Error en getAllChallenges:', err);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

exports.getByLanguage = async (req, res) => {
    try {
        const language_id = req.params.language_id;
        const challenges = await getByLanguage(language_id);
        res.status(200).json(challenges);
    } catch (err) {
        console.error('Error en getChallengesByLanguage: ', err);
        res.status(500).json({message: 'Error en el servidor'});
    }
}

exports.newChallenge = async (req, res) => {
    try {
        const { name, content, section_type, period_type, points_to_give, is_random, language_id } = req.body;
        if ( !name || !content ) {
            return res.status(400).json({message: 'Todos los campos son requeridos'})
        }
        await newChallenge(name, content, section_type, period_type, points_to_give, is_random, language_id);
        return res.status(201).json({message: 'Reto creado exitosamente'});
    } catch (err) {
        console.error('Error en newChallenge: ', err);
        return res.status(500).json({message: 'Error en el servidor'});
    }
}