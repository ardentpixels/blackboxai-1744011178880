require('dotenv').config();
const app = require('./app');

// Start server
app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`);
});