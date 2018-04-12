const express = require('express');
const db = require('../database/database.js');
const app = express();

app.use(express.static('../dist'));

app.get('/', (req, res) => {
    // db.find((data) => {
    //     return
    //     res.end(200);
    // })
    res.sendStatus(200).end();
});

app.listen(3003, () => {
    console.log('Sup dogs we listening on channel 3003 @ localhost');
});

