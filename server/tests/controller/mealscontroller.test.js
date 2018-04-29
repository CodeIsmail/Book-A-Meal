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
  it('should return 200 on success', () => {
    const request = httpMock.createRequest({
      method: 'DELETE',
      url: '/meals/1',
      params: {
        id: 1,
      },
    });

    const response = httpMock.createResponse();

    MealController.deleteMeal(request, response);

    response.statusCode.should.equal(200);
  });

  it('should return 404 on failure', () => {
    const request = httpMock.createRequest({
      method: 'DELETE',
      url: '/meals/400',
      params: {
        id: 400,
      },
    });
    const response = httpMock.createResponse();
    MealController.deleteMeal(request, response);

    response.statusCode.should.equal(404);
  });
});

describe('Update meal', () => {
  it('should return 200 on success', () => {
    const request = httpMock.createRequest({
      method: 'PUT',
      url: '/meals/3',
      body: {
        title: 'Rice and Dodo',
        desc: 'Made in nigeria',
        price: 700.00,
        img: 'img.com/img1.jpg',
      },
      params: {
        id: 3,
      },
    });

    const response = httpMock.createResponse();

    MealController.updateMeal(request, response);

    response.statusCode.should.equal(200);
  });

  it('should return 404 on failure', () => {
    const request = httpMock.createRequest({
      method: 'PUT',
      url: '/meals/24',
      body: {
        title: 'Rice and Dodo',
        desc: 'Made in nigeria',
        price: 700.00,
        img: 'img.com/img1.jpg',
      },
      params: {
        id: 24,
      },
    });

    const response = httpMock.createResponse();

    MealController.updateMeal(request, response);

    response.statusCode.should.equal(404);
  });
});
