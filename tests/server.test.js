const request = require('request');

describe('Server', () => {

  it('should return a JSON string body from a GET request', (done) => {
    request({
      url: `http://127.0.0.1:3003/0`,
      method: 'GET',
    }, (error, response, body) => {
      expect(typeof response).toBe('object');
      done();
    });
  });
});