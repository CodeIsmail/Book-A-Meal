import mealsModel from '../models/mealsmodel';

class MealsController {
  static getMeals(req, res) {
    res.status(200).json({
      status: 'success',
      data: mealsModel,
    });
  }

  static addMeal(req, res) {
    const {
      title,
      desc,
      price,
      img,
    } = req.body;

    if (!title || !desc || !price || !img) {
      return res.status(400).json({
        status: 'error',
        message: 'Your request is missing parameters. Please verify and resubmit.',
      });
    }
    const mealId = mealsModel.length + 1;
    mealsModel.push({
      mealId,
      title,
      desc,
      price,
      img,
    });

    const meal = mealsModel[mealId - 1];
    return res.status(201).json({
      status: 'success',
      meal,
    });
  }

  static deleteMeal(req, res) {
    const index = mealsModel.findIndex(obj => obj.mealId === parseInt(req.params.id, 10));
    if (index === -1) {
      return res.status(404).send(`${req.params.id} not found`);
    }
    const mealObj = mealsModel.splice(index, 1);
    return res.status(200).send(`${mealObj[0].title} was deleted`);
  }

  static updateMeal(req, res) {
    const {
      title,
      desc,
      price,
      img,
    } = req.body;
    const index = mealsModel.findIndex(obj => obj.mealId === parseInt(req.params.id, 10));
    if (index === -1) {
      return res.status(404).send(`${req.params.id} not found`);
    }

    mealsModel[index].title = title || mealsModel[index].title;
    mealsModel[index].desc = desc || mealsModel[index].desc;
    mealsModel[index].price = price || mealsModel[index].price;
    mealsModel[index].img = img || mealsModel[index].img;

    return res.status(200).json({
      status: 'Meal has been updated',
      meal: mealsModel[index],
    });
  }
}

module.exports = MealsController;
