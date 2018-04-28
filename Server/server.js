const express = require('express');
const db = require('../database/database.js');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
app.use('/:id', express.static(path.resolve(__dirname, '../dist')));
app.use('/dist', express.static('../dist'));
app.use(bodyParser.json());
app.use(cors());

app.get('/:id/listing', (req, res) => {
  let id = req.params.id;
  db.findOne(id, (err, listing) => {
    if (err) return;
    res.status(200).send(listing);
  });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(8080, () => {
    // eslint-disable-next-line
    console.log('Sup dogs we listening on channel 8080 @ localhost');
  });
}
