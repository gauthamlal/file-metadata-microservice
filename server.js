let port = process.env.PORT || 3000;

const express = require('express');
const cors = require('cors');

let app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/api/fileanalyse', (req, res) => {

});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
