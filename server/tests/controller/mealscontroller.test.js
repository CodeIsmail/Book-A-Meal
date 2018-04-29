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

describe('POST meal', () => {
  it('should return 201', () => {
    const request = httpMock.createRequest({
      method: 'POST',
      url: '/meals',
      body: {
        title: 'Rice and Dodo',
        desc: 'Made in nigeria',
        price: 700.00,
        img: 'img.com/img1',
      },
    });

    const response = httpMock.createResponse();

    MealController.addMeal(request, response);

    /* eslint no-underscore-dangle: ["error", { "allow": ["_isJSON"] }] */
    response._isJSON();
    response.statusCode.should.equal(201);
  });
});
describe('DELETE meal', () => {
  it('should return 200', () => {
    const request = httpMock.createRequest({
      method: 'DELETE',
      url: '/meals/1',
      params: {
        id: 1,
      },
    });

    // console.log(request.originalUrl);
    const response = httpMock.createResponse();

    MealController.deleteMeal(request, response);
    // console.log(response.statusCode);
    /* eslint no-underscore-dangle: ["error", { "allow": ["_isJSON"] }] */
    // response._isJSON();
    response.statusCode.should.equal(200);
  });

  it('should return 404', () => {
    const request = httpMock.createRequest({
      method: 'DELETE',
      url: '/meals/400',
      params: {
        id: 400,
      },
    });

    // console.log(request.originalUrl);
    const response = httpMock.createResponse();

    MealController.deleteMeal(request, response);
    // console.log(response.statusCode);
    /* eslint no-underscore-dangle: ["error", { "allow": ["_isJSON"] }] */
    // response._isJSON();
    response.statusCode.should.equal(404);
  });
});
