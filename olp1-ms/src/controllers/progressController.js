const { save, getAll } = require('../models/progressModel');

exports.save = async (req, res) => {
    try {
        const { userId, challengeId, attempt, result, resolution_time } = req.body;
        await save(userId, challengeId, attempt, result, resolution_time);
        res.status(201).json({message: 'Progreso guardado'});
    } catch (err) {
        console.error('Error en save progress controller: ', err);
        res.status(500).json({message: 'Error en el servidor'});
    }
}

exports.getAll = async (req, res) => {
    try {
        const progress = await getAll();
        res.stauts(200).json(progress);        
    } catch (err) {
        console.error('Error en get all progress: ', err);
        res.status(500).json({message: 'Error en el servidor'});
    }
}