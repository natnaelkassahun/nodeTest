require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

// Middleware to parse JSON
app.use(express.json());

// Default route
app.get('/', (req, res) => {
  res.status(200).send('Hello from Elastic Beanstalk!');
});

// Health check route (required for ELB health monitoring)
app.get('/health', (req, res) => {
  res.status(200).send('Healthy');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
