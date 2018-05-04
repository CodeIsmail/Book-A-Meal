import express from 'express';
import mealsRoutes from '.././api/mealsroutes';
import menuRoutes from '.././api/menuroutes';
import orderRoutes from '.././api/orderroutes';

const router = express.Router();

router.use('/meals', mealsRoutes);
router.use('/menu', menuRoutes);
router.use('/orders', orderRoutes);

module.exports = router;
