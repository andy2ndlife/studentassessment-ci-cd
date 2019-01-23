var request = require('supertest');
var app = require('../app.js');
describe('GET /', function() {
    it('Simple CI/CD integration for Student Assessment POC', function(done) {
        //navigate to root and check the the response is "Simple CI/CD integration for Student Assessment POC"
        request(app).get('/').expect('Simple CI/CD integration for Student Assessment POC', done);
    });
});