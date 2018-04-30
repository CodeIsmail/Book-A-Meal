import express from 'express';
import routesApi from './api/v1';

const router = express.Router();

router.use('/api', routesApi);

module.exports = router;
