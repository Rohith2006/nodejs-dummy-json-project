const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

let people = [];

// Load data from file
function loadData() {
  try {
    const rawData = fs.readFileSync('data.json');
    people = JSON.parse(rawData);
  } catch (error) {
    console.error('Error loading data:', error);
    process.exit(1);
  }
}

// Initialize data
loadData();

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// API endpoint to get people data
app.get('/api/data', (req, res) => {
  try {
    let result = [...people];

    // Filter
    if (req.query.language) {
      result = result.filter(person => 
        person.language.toLowerCase() === req.query.language.toLowerCase()
      );
    }

    // Sort
    if (req.query.sort) {
      const [field, order] = req.query.sort.split(':');
      if (!result[0].hasOwnProperty(field)) {
        return res.status(400).json({ error: `Invalid sort field: ${field}` });
      }
      result.sort((a, b) => {
        if (order === 'asc') {
          return a[field] > b[field] ? 1 : -1;
        } else if (order === 'desc') {
          return a[field] < b[field] ? 1 : -1;
        } else {
          return res.status(400).json({ error: 'Sort order must be "asc" or "desc"' });
        }
      });
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {const express = require('express');
    const fs = require('fs');
    
    const app = express();
    const PORT = process.env.PORT || 3000;
    
    let people = [];
    
    // Load data from file
    function loadData() {
      const rawData = fs.readFileSync('data.json');
      people = JSON.parse(rawData);
    }
    
    // Initialize data
    loadData();
    
    // API endpoint to get people data
    app.get('/api/data', (req, res) => {
      let result = [...people];
    
      // Filter
      if (req.query.language) {
        result = result.filter(person => person.language.toLowerCase() === req.query.language.toLowerCase());
      }
    
      // Sort
      if (req.query.sort) {
        const [field, order] = req.query.sort.split(':');
        result.sort((a, b) => {
          if (order === 'asc') {
            return a[field] > b[field] ? 1 : -1;
          } else {
            return a[field] < b[field] ? 1 : -1;
          }
        });
      }
    
      res.json(result);
    });
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  console.log(`Server is running on port ${PORT}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  app.close(() => {
    console.log('HTTP server closed');
  });
});