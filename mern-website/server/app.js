const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const xss = require('xss-clean');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(xss());

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error(err));

// Routes
app.use('/api/team', require('./routes/teamRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));

// Error Handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));