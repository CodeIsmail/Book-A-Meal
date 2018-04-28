import express from 'express';
import mealsRoutes from '../../api/v1/mealsroutes';

const router = express.Router();

router.use('/meals', mealsRoutes);

module.exports = router;
