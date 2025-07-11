const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/relay', (req, res) => {
  console.log('Server 2 received request');
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
