/* global it, describe */
import chai from 'chai';
import mealsModel from '../../models/mealsmodel';

chai.should();

describe('Meals Array', () => {
  it('should return array', () => {
    mealsModel.should.be.a('array');
  });
  it('should return object', () => {
    mealsModel[0].should.be.a('object');
  });
  it('should return keys of object', () => {
    mealsModel[0].should.have.keys('mealId', 'title', 'desc', 'price', 'img');
  });
});

