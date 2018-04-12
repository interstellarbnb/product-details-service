const mongoose  = require('mongoose');
mongoose.connect('mongodb://localhost/details');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
});

const listingSchema = mongoose.Schema({
    id: {
        type: Number,
        index: true,
        unique: true
    },
    spaceType: String,
    spaceTitle: String,
    spaceLoc: String,
    numGuests: Number,
    numBedrooms: Number,
    numBeds: Number, 
    numBaths: Number,
    host: { name: String, pictureUrl: String },
    summary: String
});

const Listing = mongoose.model('Listing', listingSchema);

let newListing = new Listing({
    id: 0,
    spaceType: "Rebel Alliance Base",
    spaceTitle: "Echo Base",
    spaceLoc: "Hoth",
    numGuests: 200,
    numBedrooms: 25,
    numBeds: 150, 
    numBaths: 40,
    host: {name: "Luke Skywalker", pictureUrl: "https://vignette.wikia.nocookie.net/starwars/images/d/d9/Luke-rotjpromo.jpg/revision/latest?cb=20091030151422" },
    summary: "Echo Base was the settlement established by the Rebel Alliance on the frigid planet of Hoth in the wake of the Battle of Yavin, so named due to its strange acoustics.[6] Less than a month after its establishment, the base was discovered by the Galactic Empire who then invaded Hoth, forcing the Rebels to evacuate. Echo Base was carved out of a glacier and connected by artificial corridors linked together with structural supports, while natural caverns were expanded to suit the Rebel Alliance's needs. It was protected from orbital bombardments with a massive deflector shield generator and v-150 ion cannon, which would help the Alliance evacuate the base in case of an attack.[5] Designed to be evacuated at a moment's notice, the base was hastily constructed and often as not, wampa ice creatures would sneak into the base at night, forcing the closures of various corridors.",
});

// For testing purposes
// Listing.find(function (err, results) {
//     if (err) return console.error(err);
//     console.log(results);
//   })

