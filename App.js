const express = require('express');
const personController = require('./controllers/personController');
const personModel = require('./models/personModel');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize data
personModel.loadData();

// API endpoint to get people data
app.get('/api/data', personController.getData);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  app.close(() => {
    console.log('HTTP server closed');
  });
});
