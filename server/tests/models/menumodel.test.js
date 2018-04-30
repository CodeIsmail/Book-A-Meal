/* global it, describe */
import chai from 'chai';
import menumodel from '../../models/menumodel';

chai.should();

describe('Menu Array', () => {
  it('should return array', () => {
    menumodel.should.be.a('array');
  });

  // it('should contain array of meals', () => {
  //   menumodel.forEach((obj) => {
  //     obj.should.have.keys('meals');
  //   });
  // });
});
