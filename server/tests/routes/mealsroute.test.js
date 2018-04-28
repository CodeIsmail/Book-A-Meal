/* global it, describe */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../index';

chai.should();
chai.use(chaiHttp);

describe('/GET meals', () => {
  it('it should GET all the meals', (done) => {
    chai.request(server)
      .get('/api/v1/meals')
      .end((err, res) => {
        res.should.have.status(200);
        done(err);
      });
  });
});
