const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/data', (req, res) => {
  const receivedData = req.body;
  res.json({
    message: 'Data received successfully',
    data: receivedData
  });
  console.log('Received data:', receivedData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
