var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://192.168.101.245:5000");

// UNIT test begin
 // #1 should return home page
describe("Test GET /",function(){
  it("#1 should return home page",function(done){
    // calling home page api
    server
    .get('/')
    .expect(200, done);
  });

});
 // #2 should return 403 forbidden for get user with not secure
describe("Test GET /user",function(){
    it("#2 should return 403 forbidden",function(done){
      // calling /user
      server
      .get('/user')
      .expect(403, done);
    });
  
  });
 // #3 should return list user with set error authorization for header
  describe("Test GET /user",function(){
    it("#3 should return 403 with list user set error authorization for header",function(done){
      // calling /user
      server
      .get('/user')
      .set('Authorization', 'abc')
      .expect(403, done);
    });
  
  });
// #4 should return list user with set authorization admin for header
describe("Test GET /user",function(){
    it("#4 should return 200 with list user",function(done){
      // calling /user
      server
      .get('/user')
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX3JlcSI6eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJhZG1pbiJ9LCJpYXQiOjE1NjUzMzY3NTN9.P26ay69uxje-cxftPoN_U-Kj1y-guOJxYxGuuFJiHEE')
      .expect(200, done);
    });
  });