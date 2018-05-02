/* global it, describe */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../index';

chai.should();
chai.use(chaiHttp);

describe('POST /api/v1/menu', () => {
  it('should return 201', (done) => {
    chai.request(server)
      .post('/api/v1/menu')
      .send({
        catererId: 3,
        meals: [2, 3, 1],
        date: '20/05/2018',
      })
      .end((err, res) => {
        res.should.have.status(201);
        done(err);
      });
  });

  it('should return 400', (done) => {
    chai.request(server)
      .post('/api/v1/menu')
      .send({
        catererId: 3,
        meals: [2, 3, 1],
      })
      .end((err, res) => {
        res.should.have.status(400);
        done(err);
      });
  });
});
