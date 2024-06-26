const { getAll, save, getByLanguage, getById, update, deleteModule } = require('../models/moduleModel');

exports.getAll = async (req, res) => {
  try {
    const modules = await getAll();
    res.status(200).json(modules);
  } catch (err) {
    console.error('Error en getAllModules: ', err);
    res.status(500).json({message: 'Error en el servidor'});
  }
}
exports.save = async (req, res) => {
  try {
    const language_id = req.params.language_id;
    const { name, description, content } = req.body;
    if (!name || !description || !content) {
      return res.status(400).json({ message: 'Todos los campos son requeridos' });
    }
    await save(language_id, name, description, content);
    return res.status(201).json({ message: 'Módulo creado con éxito' });
  } catch (err) {
    console.error('Error en saveModule: ', err);
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};

exports.getByLanguage = async (req, res) => {
  try {
    const language_id = req.params.language_id;
    const modules = await getByLanguage(language_id);
    res.status(200).json(modules);
  } catch (err) {
    console.error('Error en getModuleByLanguage: ', err);
    res.status(500).json({message: 'Error en el servidor'});
  };
};

exports.getById = async (req, res) => {
  try {
    const id = req.params.id;
    const modules = await getById(id);
    res.status(200).json(modules);
  } catch (err){
    console.error('Error en get module by id: ', err);
    res.status(500).json({message: "Error en el servidor"});
  }
}

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, description, content } = req.body; 
    const module = await getById(id);
    if (!module) {
      return res.status(400).json({message: 'El módulo no fue encontrado'});
    }
    await update(name, description, content, id);
    res.status(200).json({message: 'Módulo modificado con éxito'})
  } catch (err) {
    console.error('Error en update module: ', err);
    res.status(500).json({message: 'Error en el servidor'})
  }
}

exports.deleteModule = async (req, res) => {
  try {
    const id = req.params.id;    
    const module = await getById(id);
    if (!module) {
      return res.status(400).json({message: 'El módulo no fue encontrado'});
    }
    await deleteModule(id);
    res.status(200).json({message: 'Módulo eliminado'});
  } catch (err) {
    console.error('Error en delete module');
    res.status(200).json({message: 'Error en el servidor'});
  }
}
