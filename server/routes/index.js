import express from 'express';
import mealsRoutes from '../routes/mealsroutes';

const router = express.Router();

router.use('/v1/meals', mealsRoutes);

module.exports = router;
