process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Cart = require('../../models/cart');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../bin/www');
let should = chai.should();

chai.use(chaiHttp);

describe('Products', () => {
    
  describe('/GET product', () => {
      it('it should GET all the products', (done) => {
        chai.request('localhost:3000')
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
              done();
            });
      });
  });

  describe('/GET shopping cart', () => {
    it('it should GET shopping cart', (done) => {
      chai.request('localhost:3000')
          .get('/shopping-cart')
          .end((err, res) => {
              res.should.have.status(200);
            done();
          });
    });
  });

});