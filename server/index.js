import express from 'express';
import bodyParser from 'body-parser';
import mealRoute from './routes/index';

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

app.use('/api', mealRoute);

app.listen(port, () => {
  console.log('Server started at port 3000');
});

module.exports = app;
