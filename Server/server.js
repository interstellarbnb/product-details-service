const express = require('express');
const db = require('../database/database.js');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


app.use(express.static('../dist'));

app.get('/:id', (req, res) => {
  let id = req.params.id;
  db.findOne(id, (err, listing) => {
    if (err) return console.log("FUCK");
    res.send(listing);
  });
});

app.listen(3003, () => {
  console.log('Sup dogs we listening on channel 3003 @ localhost');
});
