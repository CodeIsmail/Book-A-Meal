import express from 'express';
import mealsRoutes from '../../api/v1/mealsroutes';
import menuRoutes from '../../api/v1/menuroutes';

const router = express.Router();

router.use('/meals', mealsRoutes);
router.use('/menu', menuRoutes);

module.exports = router;
