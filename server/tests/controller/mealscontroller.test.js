/* global it, describe */
import chai from 'chai';
import httpMock from 'node-mocks-http';
import MealController from '../../controllers/mealscontrollers';

chai.should();
describe('getMeals Method', () => {
  it('should return 200', () => {
    const request = httpMock.createRequest({
      method: 'GET',
      url: '/meals',
    });

    const response = httpMock.createResponse();

    MealController.getMeals(request, response);

    /* eslint no-underscore-dangle: ["error", { "allow": ["_isJSON"] }] */
    response._isJSON();
    response.statusCode.should.equal(200);
  });
});
