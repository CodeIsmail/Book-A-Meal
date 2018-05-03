import express from 'express';
import menuController from '..//../controllers/menucontrollers';

const menuRouter = express.Router();

menuRouter.post('/', menuController.createMenu);
menuRouter.get('/', menuController.getMenu);


module.exports = menuRouter;
