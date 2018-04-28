const mongoose = require('mongoose');
// docker run -d -p 8080:1337 -v $(pwd):/src/app --name listing_details_container listing_details
const db = mongoose.connection;
// When running locally:
mongoose.connect('mongodb://localhost/details');
// When dockerizing:
// mongoose.connect('mongodb://172.17.0.2:27017/details');
// When composing:
// mongoose.connect('mongodb://database/details');

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
  summary: {
    plot: String,
    space: String,
    guestInteraction: String,
    notes: String,
  },
  amenities: {
    basics: [{ type: String }],
    dining: [{ type: String }],
    bedBath: [{ type: String }],
    facilities: [{ type: String }],
    notIncluded: [{ type: String }],
  },
  rules: Array,
  rulesExpanded: Array,
  cancellationIntensity: String,
  cancellationPolicy: String,
});

const Listing = mongoose.model('Listing', listingSchema);

// Returns all listing in db
const find = (callback) => {
  Listing.find((err, result) => {
    if (err) return console.log(err);
    callback(result);
  });
};

// Returns 1 listing
const findOne = (listingId, callback) => {
  Listing.findOne({ id: listingId }, (err, res) => {
    if (err) return callback(err, null);
    callback(null, res);
  });
};

const disconnect = () => { mongoose.disconnect(); };

module.export = db;
module.exports.find = find;
module.exports.disconnect = disconnect;
module.exports.findOne = findOne;
module.exports.Listing = Listing;
