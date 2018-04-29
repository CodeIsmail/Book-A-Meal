/* global it, describe */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../index';

chai.should();
chai.use(chaiHttp);

describe('GET /api/v1', () => {
  it('should RETURN 200', (done) => {
    chai.request(server)
      .get('/api/v1/')
      .end((err, res) => {
        res.should.have.status(200);
        done(err);
      });
  });
});

describe('GET /api/v1/meals', () => {
  it('should RETURN 200', (done) => {
    chai.request(server)
      .get('/api/v1/meals')
      .end((err, res) => {
        res.should.have.status(200);
        done(err);
      });
  });
});

describe('POST /api/v1/meals', () => {
  it('should return 200', (done) => {
    chai.request(server)
      .post('/api/v1/meals')
      .send({
        title: 'Rice and chicken',
        desc: 'delicious!',
        price: 100000.00,
        img: 'img.com/img1',
      })
      .end((err, res) => {
        res.should.have.status(201);
        done(err);
      });
  });

  it('should return 400', (done) => {
    chai.request(server)
      .post('/api/v1/meals')
      .send({
        title: 'Rice and chicken',
        desc: 'delicious!',
        price: 100000.00,
      })
      .end((err, res) => {
        res.should.have.status(400);
        done(err);
      });
  });
});

describe('DELETE /api/v1/meals/:id', () => {
  it('should return 200', (done) => {
    chai.request(server)
      .del('/api/v1/meals/2')
      .end((err, res) => {
        res.should.have.status(200);
        done(err);
      });
  });

  it('should return 404', (done) => {
    chai.request(server)
      .del('/api/v1/meals/30')
      .end((err, res) => {
        res.should.have.status(404);
        done(err);
      });
  });
});

describe('UPDATE /api/v1/meals/:id', () => {
  it('should return 200', (done) => {
    chai.request(server)
      .put('/api/v1/meals/3')
      .send({
        price: 2000.00,
        img: 'img.com/img1.jpeg',
      })
      .end((err, res) => {
        res.should.have.status(200);
        done(err);
      });
  });

  it('should return 404', (done) => {
    chai.request(server)
      .put('/api/v1/meals/20')
      .send({
        title: 'Rice and chicken',
        desc: 'delicious!',
        price: 100000.00,
        img: 'img.com/img1.jpeg',
      })
      .end((err, res) => {
        res.should.have.status(404);
        done(err);
      });
  });
});
