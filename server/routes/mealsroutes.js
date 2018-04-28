import express from 'express';
import mealController from '../controllers/mealscontrollers';

const mealsRouter = express.Router();

mealsRouter.use('/', mealController.getMeals);

module.exports = mealsRouter;
