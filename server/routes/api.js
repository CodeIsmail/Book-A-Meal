import express from 'express';
import mealsRoutesApi from './api/v1';

const router = express.Router();

router.use('/api', mealsRoutesApi);

module.exports = router;
