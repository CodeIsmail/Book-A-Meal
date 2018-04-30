import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/api';

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(port, () => {
  console.log('Server started at port 3000');
});

module.exports = app;
