import mealsModel from '../models/mealsmodel';

class MealsController {
  static getMeals(req, res) {
    res.status(200).json({ status: 'success', data: mealsModel });
  }
}

module.exports = MealsController;
