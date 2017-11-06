process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Cart = require('../../models/cart');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../bin/www');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Products', () => {
    // beforeEach((done) => { //Before each test we empty the database
    //     Cart.remove({}, (err) => { 
    //        done();         
    //     });     
    // });
/*
  * Test the /GET route
  */
  describe('/GET product', () => {
      it('it should GET all the products', (done) => {
        chai.request('localhost:3000')
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                // res.body.should.be.a('array');
                // res.body.length.should.be.eql(0);
              done();
            });
      });
  });

});