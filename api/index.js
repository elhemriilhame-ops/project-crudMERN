const express = require('express')
const app = express()
const cors = require('cors'); // Required to allow requests from a different origin (your React app)

app.use(cors()); // Enables all CORS requests
app.use(express.json()); // Parses JSON bodies

const PORT = 5000;

// Fake database
let users = [];

// Test route
app.get('/', (req, res) => {
  res.send('Server is running...');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
