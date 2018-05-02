import express from 'express';
import routesApi from './api/index';

const router = express.Router();

router.use('/api/v1', routesApi);
router.get('/api/v1', (req, res) => {
  res.send('Welcome!');
});
module.exports = router;
