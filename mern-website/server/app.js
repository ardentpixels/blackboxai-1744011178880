const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// In-memory data storage
const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Developer',
    bio: 'Full stack developer with 5 years experience'
  }
];

// Routes
app.use('/api/team', require('./routes/teamRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));

// Error Handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));