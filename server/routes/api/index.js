import express from 'express';
import mealsRoutes from '.././api/mealsroutes';
import menuRoutes from '.././api/menuroutes';

const router = express.Router();

router.use('/meals', mealsRoutes);
router.use('/menu', menuRoutes);

module.exports = router;
