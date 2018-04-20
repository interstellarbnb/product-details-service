const db = require('./database.js');
// Plugin for generating fake data
const faker = require('faker');

const types = ['Station', 'Wormhole', 'Alpha Base', 'Moon', 'Satellite',
  'Black Hole', 'Rover', 'Crater', 'Asteroid', 'Rocket Ship'];

let typeCount = 0;
for (let i = 1; i < 100; i += 1) {
  const randNum = Math.floor(1 + (Math.random() * 6));
  const oneSeed = {
    id: i,
    spaceType: types[typeCount],
    spaceTitle: faker.commerce.productName(),
    spaceLoc: faker.address.county(),
    numGuests: randNum,
    numBedrooms: randNum,
    numBeds: randNum,
    numBaths: randNum,
    host: { 
      name: faker.name.findName(),
      pictureUrl: faker.image.avatar(),
    },
    summary: {
      plot:  faker.lorem.paragraph(),
      space: faker.lorem.paragraph(),
      notes: faker.lorem.paragraph(),
      interactionWithGuest: faker.lorem.paragraph(),
    },
  };
  db.Listing.create(oneSeed, (err, small) => {
    if (err) return console.log(err);
    //
  });

  if (typeCount === 9) {
    typeCount = 0;
  }
  typeCount += 1;
}
