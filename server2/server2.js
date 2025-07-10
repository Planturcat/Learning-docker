const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Endpoint for server1 to call
app.post('/api/relay', (req, res) => {
  const { number } = req.body;
  if (number === 7) {
    res.json({ message: 'You found the magical number!' });
  } else {
    res.json({ message: 'no luck' });
  }
});

app.listen(5002, '0.0.0.0', () => {
  console.log('Server 2 listening on port 5002');
});