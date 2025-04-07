const express = require('express');
const router = express.Router();

// Handle contact form submission
router.post('/', async (req, res) => {
  try {
    console.log('Contact form submitted:', req.body);
    res.status(200).json({ 
      success: true,
      message: 'Thank you for your message! We will get back to you soon.'
    });
  } catch (err) {
    console.error('Contact form error:', err);
    res.status(500).json({ 
      success: false,
      message: 'Something went wrong. Please try again later.'
    });
  }
});

module.exports = router;