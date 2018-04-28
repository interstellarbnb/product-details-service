const db = require('./database.js');
const _ = require('underscore');
const faker = require('faker');
/*
    Seed generator will pick a random # of each field to generate seed data
*/
const types = ['Station', 'Wormhole', 'Alpha Base', 'Moon', 'Satellite',
  'Black Hole', 'Rover', 'Crater', 'Asteroid', 'Rocket Ship'];

const basicAmenities = ['Wifi 3.0', 'Interstellar TV', 'Geiger counter', 'Washer', 'Dryer',
  'Central heating', 'Air conditioning', 'Shuttle charging', 'First aid kit', 'Carbon monoxide monitor',
  'Siri enabled', 'Wadsworth - personal robotic butler', 'Flux sensor', 'Haptic drive'];

const diningAmenities = ['Coffee maker', 'Basic cooking utensils', 'Dishes and silverware', 'Microwave', 'Oven',
  'Stove', 'Refrigerator', 'Full bar', 'Mini bar', 'Geothermal oven', 'Food sanitizer', 'Wonka vision'];

const bedBathAmenities = ['Sleeping pods', 'Smartflow toilets', 'Self-cleaning mattress', 'floating beds',
  'Chromatherapy shower', 'Auto towel-warming', 'Smart mirror', 'Bathtub', 'Heated floors'];

const facilitiesAmenities = ['Shuttle dock', 'Hot tub', 'Swimming pool', 'Bubble shield', 'Solar powered',
  'Organic farm', 'Simulation station', 'Moisture vaporator', 'Cogwave jammer', 'Geomapper module', 'Tesla coil',
  'Dejarik board'];

// Returns a collection of random amenities
const generateAmenities = (arr) => {
  const randNum = Math.floor(1 + (Math.random() * arr.length));
  return _.sample(arr, randNum);
};
const generateNotIncluded = basics => _.difference(basicAmenities, basics);
const generateRandomNumber = () => Math.floor(1 + (Math.random() * 6));

let count = 1 ;
let typeCount = 0;
const createSeed = () => {
  const newSeed = {
    id: count,
    spaceType: types[typeCount],
    spaceTitle: faker.commerce.productName(),
    spaceLoc: faker.address.county(),
    numGuests: generateRandomNumber(),
    numBedrooms: generateRandomNumber(),
    numBeds: generateRandomNumber(),
    numBaths: generateRandomNumber(),
    host: {
      name: faker.name.findName(),
      pictureUrl: faker.image.avatar(),
    },
    summary: {
      plot: faker.lorem.paragraph(),
      space: faker.lorem.paragraph(),
      notes: faker.lorem.paragraph(),
      guestInteraction: faker.lorem.paragraph(),
    },
    amenities: {
      basics: generateAmenities(basicAmenities),
      dining: generateAmenities(diningAmenities),
      bedBath: generateAmenities(bedBathAmenities),
      facilities: generateAmenities(facilitiesAmenities),
    },
  };
  newSeed.amenities.notIncluded = generateNotIncluded(newSeed.amenities.basics);
  db.Listing.create(newSeed, (err, success) => {
    if (err) return console.log(err);
    if (success && count < 100) {
      count += 1;
      createSeed();
    } else {
      console.log('All done seeding ', count, ' entries!');
      db.disconnect();
    }
  });

  if (typeCount === 9) { typeCount = 0; }
  typeCount += 1;
};

// best seed
const hoth = new db.Listing({
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
  amenities: {  // todo
    basic: ['Tauntaun rides', 'T-47-airspeeder tours', 'Full medical bay', 'Central heating'],
    dining: ['Full cafeteria', 'Blue milk', 'Wild mushrooms', 'Frogs', 'Bantha taretar', 'Pickled blackbeak egg'],
    bedBath: ['Individual cots'],
    facilities: ['Protected by sentry outposts', 'Cave sprelunking', 'Restaurants & bars onsite'],
    notIncluded: ['Temperatures above 0'],
  },
  rules: ['Wampa is not your friend!', 'No killing & sleeping inside tauntauns', 'T-47 airspeeders are not toys'],
  rulesExpanded: [
    'There are a handful of domesticated, friendly, tauntauns in the immediate area. Don\'t be \
    afraid if you\'re approached, tauntauns are just gigantic plant-eating lizards. Please do not ride the tauntauns \
    without proper guidence.',

    'T-47 airspeeders are found in the hangar and are not to be touched except during routine training and emergencies. \
      The Galactic Empire is still active and Hoth base is still prone to attack',

    'The medical bay is active! Please do not disturb the medical droids.',

    'The snowy plains of Hoth may still contain scattered pieces of destroyed AT-AT or AT-ST\'s, travel with caution'
  ],
  cancellationIntensity: 'Relaxed',
  cancellationPolicy: 'Cancel at anytime prior to arrival. Considering Yavin lies on the outer bounds of the local \
    star system, it requires travel at lightspeed to access',
}); 

// Running this more than once on any Mango instance will restult in a crash
// due to the unique ID's
db.Listing.remove({}, (err) => {
  console.log('Collection removed');
});

hoth.save((err, saved) => {
  if (err) return console.log(err);
  console.log('Saved initial hoth seed');
});

createSeed();
