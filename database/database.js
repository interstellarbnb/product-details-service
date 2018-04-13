const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/details');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
});

const listingSchema = mongoose.Schema({
  id: {
    type: Number,
    index: true,
    unique: true,
  },
  spaceType: String,
  spaceTitle: String,
  spaceLoc: String,
  numGuests: Number,
  numBedrooms: Number,
  numBeds: Number,
  numBaths: Number,
  host: { name: String, pictureUrl: String },
  summary: String,
});

const Listing = mongoose.model('Listing', listingSchema);

// Returns all documents
const find = (callback) => {
  Listing.find((err, result) => {
    if (err) return console.log(err);
    callback(result);
  });
};

// Grabs 1 document with passed in id
const findOne = (listingId, callback) => {
  Listing.findOne({ id: listingId }, (err, res) => {
    if (err) return callback(err, null);
    callback(null, res);
  });
};

// findOne({ id: 0 }, (err, res) => {
//   if (err) return console.log(err);
//   console.log(res);
// });

// 1st seed
// let newListing = new Listing({
//     id: 0,
//     spaceType: "Rebel Alliance Base",
//     spaceTitle: "Echo Base",
//     spaceLoc: "Hoth",
//     numGuests: 200,
//     numBedrooms: 25,
//     numBeds: 150,
//     numBaths: 40,
//     host: {name: "Luke Skywalker", pictureUrl: "https://vignette.wikia.nocookie.net/starwars/images/d/d9/Luke-rotjpromo.jpg/revision/latest?cb=20091030151422" },
//     summary: "Echo Base was the settlement established by the Rebel Alliance.",
// });

// For testing purposes
// Listing.find(function (err, results) {
//     if (err) return console.error(err);
//     console.log(results);
//   });

module.export = db;
module.exports.find = find;
module.exports.findOne = findOne;
module.exports.Listing = Listing;
