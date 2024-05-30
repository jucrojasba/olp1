// Import required libraries and models
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { save, findByEmail } = require("../models/userModel");

// Register a new user
exports.register = async (req, res) => {
  try {
    // Extract user data from request body
    const { name, email, password, points, profile_picture_url } = req.body;
    
    if(!name || !email || !password) {
        return res.status(400).json({message: 'Todos los campos son requeridos'});
    }

    // Check if user already exists
    let user = await findByEmail(email);
    if (user) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save the new user in database
    user = await save( name, hashedPassword, email, points, profile_picture_url );
 
    if (!user) {
      return res.status(404).json({ message: "Error al crear el usuario" });
    }
 
    // Return success message and user data
    res.status(201).json({ message: "Usuario creado exitosamente", user });
  } catch (err) {
    console.error("Error en register:", err);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

// Log in an existing user
exports.login = async (req, res) => {
  try {
    // Extract user data from request body
    const { email, password } = req.body;

    // Check if user exists
    const user = await findByEmail(email);
    console.log(email, user);
    if (!user) {
      console.log("Usuario no existe");
      return res.status(400).json({ message: "Ese Usuario no existe" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "Usuario o contraseña incorrectos" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "12h",
    });

    // Return token and user data
    res.json({
      token,
      user: { id: user.id, username: user.username, email: user.email },
    });
  } catch (err) {
    console.error("Error en login:", err);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

// Verify JWT token
exports.verifyToken = (req, res) => {
  const token = req.header("Authorization").split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Token no proporcionado", valid: false });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    res.json({ valid: true });
  } catch (err) {
    // Check is instance of TokenExpiredError
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expirado", valid: false });
    }
    // Check if instance of JsonWebTokenError
    if (err.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Token inválido", valid: false });
    }

    // Check if instance of Error
    if (err instanceof Error) {
      return res
        .status(500)
        .json({ message: "Error en el servidor", valid: false });
    }
  }
};
