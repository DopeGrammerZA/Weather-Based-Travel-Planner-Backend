const User = require("../models/user");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;  

    if (!name || !email || !password) { 
      return res.status(400).json({ message: "All fields are required" });
    }
    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message: "Password must include at least one lowercase, one uppercase, and one number.",
      });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Email is already taken" }); 
    }

    const newUser = new User({
      name,
      email,
      password
    });

    await newUser.save();

    return res.status(201).json({ message: "User registered successfully!" });
  }catch (error) {
    if (error.name === "MongoError" && error.code === 11000) {
      console.error("Registration error:", error);
      return res.status(400).json({ message: "Email is already taken" });
    }
  
    if (error.name === "ValidationError") {
      console.error("Validation error:", error);
      return res.status(400).json({
        message: "Invalid data provided",
        error: error.message,
      });
    }
  
    console.error("Registration error:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
  
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;


    if (!email || !password) { 
      return res.status(400).json({ message: "Email and password are required" });  
    }

    const user = await User.findOne({ email });  
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });  
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = { registerUser, loginUser };
