import express from 'express';
import mealsRoutes from '../../routes/api/mealsroutes';

const router = express.Router();

router.use('/meals', mealsRoutes);

module.exports = router;
