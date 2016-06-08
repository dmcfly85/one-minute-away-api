
//TODO a route test to be moved to routes_test.js

// 'use strict';
//
// const chai = require('chai');
// const chaiHTTP = require('chai-http');
// chai.use(chaiHTTP);
// const expect = chai.expect;
// const request = chai.request;
// //const secret = process.env.SECRET || 'changeme';
// const dbPort = process.env.MONGOLAB_URI;
// const mongoose = require('mongoose');
// const User = require('../model/user');
//
// process.env.MONGOLAB_URI = 'mongodb://localhost/test_db';
//
// require('../server');
//
// //TODO MOVE file to routes_test.js and create other test
//
// describe('Route saving integration tests', () => {
//   let token = '';
//   beforeEach((done) => {
//     request('localhost:3000')
//       .post('/signup')
//       .set('Content-Type', 'application/json')
//       .send({
//         username: 'ZTestuser',
//         password: 'password',
//         phoneNumber: '555555555',
//         email: 'test@test.com'
//       })
//       .end((err, res) => {
//         // if(err) return console.log(err);
//         // console.log('token', res.body.token);
//         token = res.body.token;
//         done();
//       });
//   });
//   afterEach((done) => {
//     process.env.MONGOLAB_URI = dbPort;
//     mongoose.connection.db.dropDatabase(() => {
//       done();
//     });
//   });
//   //TODO not sure we need to test our test!! Latte will fail if test is bad
//   it('our guy should be there', (done) => {
//     User.findOne({username: 'ZTestuser'}, () => {
//       done();
//     });
//   });
//   it('should post our route to our user', (done) => {
//     request('localhost:3000')
//     .post('/alert/saveRoute')
//     .set('Content-Type', 'application/json')
//     .set('token', token)
//     .send({
//       nickname: 'nickname',
//       route_id: '1_00034',
//       stop_id: '1_02312'
//     })
//     .end((err, res) => {
//       if (err) console.log(err);
//       expect(res.body).to.be.an('object');
//       expect(res.body._id).to.be.a('string');
//       expect(res.body.username).to.eql('ZTestuser');
//       expect(res.body.routes).to.be.an('array');
//       expect(res.body.routes[0]).to.be.an('object');
//       expect(res.body.routes[0].nickname).to.eql('nickname');
//       done();
//     });
//   });
// });
