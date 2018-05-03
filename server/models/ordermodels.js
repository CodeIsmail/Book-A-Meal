import user from '../models/usermodel';
import meal from '../models/mealsmodel';

const orders = [{
  oderId: 2,
  user: user[1],
  meal: meal[1],
  quantity: 3,
  date: '05/05/2018',
},
{
  oderId: 3,
  user: user[1],
  meal: meal[3],
  quantity: 2,
  date: '20/05/2018',
},
{
  oderId: 2,
  user: user[1],
  meal: meal[4],
  quantity: 2,
  date: '04/06/2018',
},
{
  oderId: 2,
  user: user[1],
  meal: meal[2],
  quantity: 5,
  date: '20/05/2018',
},
];

export default orders;
