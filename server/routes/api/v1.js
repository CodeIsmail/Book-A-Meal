import express from 'express';
import mealsRoutesIndex from '../api/v1/index';

const router = express.Router();

router.use('/v1', mealsRoutesIndex);

module.exports = router;
