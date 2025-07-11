const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const SERVER2_URL = 'http://server-b:5002';

console.log('The next TEST');

app.get('/start', async (req, res) => {
  let results = [];
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    try {
      const response = await axios.post(`${SERVER2_URL}/api/relay`, {
        number: randomNumber,
      });
      results.push({ sent: randomNumber, reply: response.data.message });
    } catch (err) {
      results.push({ sent: randomNumber, reply: 'Error contacting server2' });
    }
  }
  res.json({ results });
});

app.listen(5001, '0.0.0.0', () => {
  console.log('Server 1 listening on port 5001');
});
