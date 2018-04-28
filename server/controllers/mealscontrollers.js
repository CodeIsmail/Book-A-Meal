import mealsModel from '../models/mealsmodel';

class MealsController {
  static getMeals(req, res) {
    res.status(200).json({ status: 'success', data: mealsModel });
  }

  static addMeal(req, res) {
    const {
      mealId, title, desc, price, img,
    } = req.body;

    if (!mealId || !title || !desc || !price || !img) {
      return res.status(400).json({
        status: 'error',
        message: 'Your request is missing parameters. Please verify and resubmit.',
      });
    }

    mealsModel.push({
      mealId: mealsModel.length + 1,
      title,
      desc,
      price,
      img,
    });

    return res.status(201).json({ status: 'success' });
  }
}

module.exports = MealsController;
