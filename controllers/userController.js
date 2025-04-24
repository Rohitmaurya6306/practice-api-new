
const User = require('../models/userModel');
// Register User
exports.registerUser = async (req, res) => {
  try {
    const { userId, name, email, phone, password, age } = req.body;

    if (!userId || !name || !email || !phone || !password || !age) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check uniqueness
    const userExists = await User.findOne({ userId });
    if (userExists) {
      return res.status(400).json({ message: 'User ID already exists' });
    }

    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const newUser = new User({ userId, name, email, phone, password, age });
    await newUser.save();

      res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (err) {
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  };





// Get All Users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get User by userId
exports.getUserByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findOne({ userId }).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found with this ID' });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};





// Login with userId and password
exports.loginUser = async (req, res) => {
  try {
    const { userId, password } = req.body;

    // Check for missing fields
    if (!userId || !password) {
      return res.status(400).json({ message: 'userId and password are required' });
    }

    // Find user by userId
    const user = await User.findOne({ userId });

    if (!user) {
      return res.status(404).json({ message: 'User not found with this userId' });
    }

    // Check if password matches (no hashing here)
    if (user.password !== password) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    // Success
    res.status(200).json({
      message: 'Login successful',
      user: {
        userId: user.userId,
        name: user.name,
        email: user.email,
        phone: user.phone,
        age: user.age
      }
    });

  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};





