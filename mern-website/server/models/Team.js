const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  bio: { type: String, required: true },
  image: { type: String, required: true },
  social: {
    linkedin: String,
    twitter: String
  }
});

module.exports = mongoose.model('Team', teamSchema);