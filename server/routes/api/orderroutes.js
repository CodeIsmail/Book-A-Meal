import express from 'express';
import orderController from '..//../controllers/ordercontroller';

const menuRouter = express.Router();

menuRouter.post('/', orderController.createOrder);
// menuRouter.get('/', menuController.getMenu);


module.exports = menuRouter;
