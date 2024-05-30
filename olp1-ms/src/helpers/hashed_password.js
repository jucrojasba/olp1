const bcrypt = require('bcryptjs'); // Import the bcryptjs library, which provides functions for hashing and salting passwords


exports.generateHashedPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);   // Generate a salt using the bcrypt.genSalt function

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log('Hashed Password:', hashedPassword);
};

