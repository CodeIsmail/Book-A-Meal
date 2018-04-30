import express from 'express';
import menuController from '../../../controllers/menucontrollers';

const menuRouter = express.Router();

menuRouter.get('/', menuController.setMenu);


module.exports = menuRouter;
