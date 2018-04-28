import express from 'express';
import mealsRoutesIndex from '../api/v1/index';

const router = express.Router();

router.use('/v1', mealsRoutesIndex);
router.use('/v1', (req, res) => {
  res.send('Welcome!');
});

module.exports = router;
