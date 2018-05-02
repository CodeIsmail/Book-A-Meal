import menuModel from '../models/menumodel';
// import mealModel from '../models/mealsmodel';

class MenuControllers {
  static createMenu(req, res) {
    const {
      date,
      catererId,
      meals,
    } = req.body;

    if (!date || !catererId || !meals) {
      return res.status(400).json({
        status: 'error',
        message: 'Your request is missing parameters. Please verify and resubmit.',
      });
    }

    console.log(meals);
    const menuId = menuModel.length + 1;
    menuModel.push({
      menuId,
      catererId,
      meals,
      date,
    });

    return res.status(201).json({
      status: 'success',
      menuModel,
    });
  }
}

module.exports = MenuControllers;
