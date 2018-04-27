import express from 'express';
import bodyParser from 'body-parser';

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Congratulations, You\'ve set up your server');
});

app.listen(port, () => {
  console.log('Server started at port 3000');
});
