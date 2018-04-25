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

let typeCount = 0;
for (let i = 0; i < 100; i += 1) {
  const newSeed = {
    id: i,
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
  db.Listing.create(newSeed, (err, small) => {
    if (err) return console.log(err);
    //  I should update this to use promies
  });
  if (typeCount === 9) { typeCount = 0; }
  typeCount += 1;
}
