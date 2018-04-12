const express = require('express');
const db = require('../database/database.js');
const app = express();

app.get('/', (req, res) => {
    db.find((data) => {
        console.log('here data...');
        console.log(data);
        res.end(JSON.stringify(data));
    })
});

app.listen(3003, () => {
    console.log('Sup dogs we listening on channel 3003 @ localhost');
});

