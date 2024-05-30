const jwt = require("jsonwebtoken"); // Import the jsonwebtoken library

// Middleware function for authentication
const authMiddleware = (req, res, next) => {
  const token = req.header   // Get the token from the Authorization header
  ("Authorization").split(" ")[1];

  if (!token) {   // If there is no token, return a 401 Unauthorized response
    return res.status(401).json({ message: "Acceso no autorizado" });
  }

  try { 
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.error("Error en authMiddleware:", err);
    res.status(401).json({ message: "Token inválido" });     // Return a 401 Unauthorized response if the token is invalid

  }
};

module.exports = authMiddleware;
