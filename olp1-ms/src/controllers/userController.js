const {
  findById,
  update,
  deleteUser,
  getAll,
  save,
} = require("../models/userModel");

exports.getAll = async (req, res) => {
  try {
    const users = await getAll();
    res.status(200).json(users);
  } catch (err) {
    console.error("Error en getAllUsers:", err);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await findById(id);
    if (!user) {
      return res.status(400).json({ message: "Ese Usuario no existe" });
    }
    res.json(user);
  } catch (err) {
    console.error("Error en getById:", err);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, password } = req.body;

    // Verificar si el usuario existe
    const user = await findById(id);
    if (!user) {
      return res.status(400).json({ message: "Ese Usuario no existe" });
    }

    // Encriptar contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Actualizar usuario
    const updatedUser = await update(id, {
      username,
      email,
      password: hashedPassword,
    });

    res
      .status(200)
      .json({ message: "Usuario actualizado exitosamente", user: updatedUser });
  } catch (err) {
    console.error("Error en update:", err);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Verificar si el usuario existe
    const user = await findById(id);
    if (!user) {
      return res.status(400).json({ message: "Ese Usuario no existe" });
    }

    // Eliminar usuario
    await deleteUser(id);

    res.status(200).json({ message: "Usuario eliminado exitosamente" });
  } catch (err) {
    console.error("Error en delete:", err);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

// exports.save = async (req, res) => {
//     try {
//         const { username, email, password, points } = req.body;
//         if(!username || !email || !password) {
//             return res.status(400).json({message: 'Todos los campos son requeridos'});
//         }

//         const hashedPassword = await generateHashedPassword(password);
//         await save(username, hashedPassword, email, points);
//         return res.status(200).json({message: 'Usuario creado con éxito'});
//     } catch (err) {
//         console.error('Error en save user: ', err);
//         return res.status(500).json({message: 'Hubo un error en el servidor'});
//     }
// }
