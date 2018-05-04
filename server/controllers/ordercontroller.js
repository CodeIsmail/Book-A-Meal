import orderModel from '../models/ordermodels';
import userModel from '../models/usermodel';
import mealModel from '../models/mealsmodel';

class OrderControllers {
  static createOrder(req, res) {
    const {
      userId,
      mealId,
      quantity,
    } = req.body;

    if (!userId || !mealId || !quantity) {
      return res.status(400).json({
        status: 'error',
        message: 'Your request is missing parameters. Please verify and resubmit.',
      });
    }

    const user = userModel.filter(obj => obj.userId === userId)
      .map(userObj => userObj);
    const meal = mealModel.filter(obj => obj.mealId === mealId)
      .map(mealObj => mealObj);

    const amount = parseInt(meal[0].price, 10) * parseInt(quantity, 10);

    const orderId = orderModel.length + 1;
    orderModel.push({
      orderId,
      user: user[0].name,
      meal: meal[0].title,
      quantity,
      amount,
    });

    return res.status(201).json({
      status: 'success',
      orderModel,
    });
  }
}

export default OrderControllers;
