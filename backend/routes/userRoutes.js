// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/model');

// Search users by username
router.get('/search', async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: 'Query parameter is required' });
  }

  try {
    const users = await User.find({
      username: { $regex: query, $options: 'i' }, // Case-insensitive search
    }).select('username profilePicture');

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
