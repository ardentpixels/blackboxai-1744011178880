const express = require('express');
const router = express.Router();

let teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Developer',
    bio: 'Full stack developer with 5 years experience'
  }
];

// Get all team members
router.get('/', (req, res) => {
  res.json(teamMembers);
});

// Add new team member
router.post('/', (req, res) => {
  const newMember = {
    id: teamMembers.length + 1,
    ...req.body
  };
  teamMembers.push(newMember);
  res.status(201).json(newMember);
});

module.exports = router;