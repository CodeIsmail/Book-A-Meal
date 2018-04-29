import express from 'express';
import mealController from '../../../controllers/mealscontrollers';

const mealsRouter = express.Router();

mealsRouter.get('/', mealController.getMeals);
mealsRouter.post('/', mealController.addMeal);
mealsRouter.delete('/:id', mealController.deleteMeal);
mealsRouter.put('/:id', mealController.updateMeal);

module.exports = mealsRouter;
