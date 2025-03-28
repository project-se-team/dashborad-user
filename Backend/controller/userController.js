const User = require('../models/User');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findOne({});
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ 
      message: 'Server error', 
      error: error.message 
    });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      {}, 
      req.body, 
      { new: true, runValidators: true }
    );
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ 
      message: 'Server error', 
      error: error.message 
    });
  }
};