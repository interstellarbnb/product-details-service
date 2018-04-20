const mongoose = require('mongoose');

const db = mongoose.connection;
mongoose.connect('mongodb://localhost/details');

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
    interactionWithGuests: String,
    notes: String,
  },
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

// To clear db, run this
// Listing.remove({}, (err) => { 
//   console.log('collection removed'); 
// });

// findOne({ id: 0 }, (err, res) => {
//   if (err) return console.log(err);
//   console.log(res);
// });

// 1st seed
const newListing = new Listing({
  id: 0,
  spaceType: 'Rebel Alliance Base',
  spaceTitle: 'Echo Base',
  spaceLoc: 'Hoth',
  numGuests: 200,
  numBedrooms: 25,
  numBeds: 150,
  numBaths: 40,
  host: { name: 'Luke Skywalker', pictureUrl: 'https://vignette.wikia.nocookie.net/starwars/images/d/d9/Luke-rotjpromo.jpg/revision/latest?cb=20091030151422' },
  summary: {
    plot: 'Echo Base was the settlement established by the Rebel Alliance \
    on the frigid planet of Hoth in the wake of the Battle of Yavin, so named \
    due to its strange acoustics.[6] Less than a month after its establishment, \
    the base was discovered by the Galactic Empire who then invaded Hoth, \
    forcing the Rebels to evacuate.',

    space: 'Echo Base was the settlement established by the Rebel Alliance on the frigid planet \
    of Hoth in the wake of the Battle of Yavin, so named due to its strange acoustics.[6] \
    Less than a month after its establishment, the base was discovered by the Galactic Empire who \
    then invaded Hoth, forcing the Rebels to evacuate. Echo Base was carved out of a glacier and \
    connected by artificial corridors linked together with structural supports, while natural caverns \
    were expanded to suit the Rebel Alliance\'s needs. It was protected from orbital bombardments with \
    a massive deflector shield generator and v-150 ion cannon, which would help the Alliance evacuate \
    the base in case of an attack.[5] Designed to be evacuated at a moment\'s notice, the base was hastily \
    constructed and often as not, wampa ice creatures would sneak into the base at night, \
    forcing the closures of various corridors.',

    interactionWithGuests: 'Being an inactive base since the war, interactions with soldiers are rare. \
    Guests can expect to see maintenence droids, and housekeepers roaming the halls. \
    COM center is a short tauntaun ride away!', 

    notes: 'Temperatures are subzero! Bring a coat',
  },
});

// To seed with a given entry..
// Listing.create(newListing, (err, res) => {
//   if(err) return console.log(err);
//   console.log('Saved!', res);
// })

// To log all entries, run this
// Listing.find(function (err, results) {
//     if (err) return console.error(err);
//     console.log(results);
//   });


module.export = db;
module.exports.find = find;
module.exports.findOne = findOne;
module.exports.Listing = Listing;
