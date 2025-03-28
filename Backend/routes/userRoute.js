const express = require('express');
const router = express.Router();
const User = require('../models/User'); // ตรวจสอบ path ให้ถูกต้อง

// GET user profile
router.get('/profile', async (req, res) => {
  try {
    // ในตัวอย่างนี้ใช้ ID แรกสุดเพื่อความง่าย (ควรปรับตามระบบ authentication จริง)
    const user = await User.findOne({});
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// UPDATE user profile
router.put('/profile', async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      {}, // เงื่อนไขการค้นหา (ควรใช้ ID จาก authentication)
      req.body, 
      { new: true, runValidators: true }
    );
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;