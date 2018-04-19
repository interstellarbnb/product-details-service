const db = require('./database.js');
const faker = require('faker');

console.log(faker.commerce.department());
const types = ['Station', 'Wormhole', 'Alpha Base', 'Moon', 'Satellite',
              'Black Hole', 'Rover', 'Crater', 'Asteroid', 'Rocket Ship'];
let count = 1; 
let typeCount = 0;
let results = [];
for(var i = 1; i < 100; i++) {

  const randInt = Math.floor(1 + Math.random() * 6);
  const oneSeed = {
    id: i,
    spaceType: types[typeCount],
    spaceTitle: faker.commerce.productName(),
    spaceLoc: faker.address.county(),
    numGuests: Math.floor(1 + Math.random() * 6),
    numBedrooms: Math.floor(1 + Math.random() * 3),
    numBeds: Math.floor(1 + Math.random() * 3), 
    numBaths: Math.floor(1 + Math.random() * 4),
    host: { name: faker.name.findName(), pictureUrl: faker.image.avatar() },
    summary: faker.lorem.paragraph()
  }
  db.Listing.create(oneSeed, function (err, small) {
    if (err) return handleError(err);
  });

  if(typeCount === 9) {
    typeCount = 0;
  }
  typeCount++;
}
