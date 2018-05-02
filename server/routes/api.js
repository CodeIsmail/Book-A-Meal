import express from 'express';
import mealsRoutesApi from './api/index';

const router = express.Router();

router.use('/api/v1/', mealsRoutesApi);
router.get('/v1', (req, res) => {
  res.send('Welcome!');
});


module.exports = router;
