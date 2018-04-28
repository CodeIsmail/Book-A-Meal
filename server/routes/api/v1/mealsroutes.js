import express from 'express';
import mealController from '../../../controllers/mealscontrollers';

const mealsRouter = express.Router();

mealsRouter.get('/', mealController.getMeals);
mealsRouter.post('/', mealController.addMeal);

module.exports = mealsRouter;
