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
});

const Listing = mongoose.model('Listing', listingSchema);

// Returns all listing in db
const find = (callback) => {
  Listing.find((err, result) => {
    if (err) return console.log(err);
    callback(result);
  });
};

// Finds 1 listing 
const findOne = (listingId, callback) => {
  Listing.findOne({ id: listingId }, (err, res) => {
    if (err) return callback(err, null);
    callback(null, res);
  });
};

const disconnect = () => { mongoose.disconnect(); };

// best seed
const hoth = new Listing({
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
  // amenities: {  // todo
  //   basic: ,
  //   dining: ,
  //   bedBath: ,
  //   facilities: ,
  //   notIncluded: ,
  // }
});

module.export = db;
module.exports.find = find;
module.exports.disconnect = disconnect;
module.exports.findOne = findOne;
module.exports.Listing = Listing;
