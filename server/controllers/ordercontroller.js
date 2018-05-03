import menuModel from '../models/ordermodels';
import mealModel from '../models/usermodel';

class OrderControllers {
  static createOrder(req, res) {
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
    if (!Array.isArray(meals)) {
      return res.status(400).json({
        status: 'error',
        message: 'Your meal content is empty. Please verify and resubmit.',
      });
    }

    const mealsMapped = meals.map((obj) => {
      const arr = mealModel[obj - 1];
      return arr;
    });

    console.log(meals);
    const menuId = menuModel.length + 1;
    menuModel.push({
      menuId,
      catererId,
      mealsMapped,
      date,
    });

    return res.status(201).json({
      status: 'success',
      menuModel,
    });
  }

  static getMenu(req, res) {
    // const { date } = req.params;
    const index = menuModel.findIndex(obj => obj.date === '05/05/2018');

    if (index === -1) {
      return res.status(404).json({ status: 'error', message: 'No menu for this date' });
    }
    return res.status(200).json({
      status: 'success',
      data: menuModel[index],
    });
  }
}

export default OrderControllers;
