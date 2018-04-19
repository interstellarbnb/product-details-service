const db = require('../database/database');

describe('Database', () => {

  it('should return all items in the database', (done) => {
    db.find((data) => {
      expect(data.length).toBe(100);
      done();
    });
  });


  it('should return a single entry with a given id', (done) => {
    db.findOne(4, (err, res) => {
      expect(res.id).toBe(4);
      done();
    });
  });
});
