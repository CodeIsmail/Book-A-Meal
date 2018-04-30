import express from 'express';
import routeIndex from '../api/v1/index';

const router = express.Router();

router.use('/v1', routeIndex);
router.get('/v1', (req, res) => {
  res.send('Welcome!');
});

module.exports = router;
