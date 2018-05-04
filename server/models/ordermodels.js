import user from '../models/usermodel';
import meal from '../models/mealsmodel';

const orders = [{
  oderId: 1,
  user: user[1].name,
  meal: meal[1].title,
  quantity: 3,
  amount: 3600,
},
{
  oderId: 2,
  user: user[1].name,
  meal: meal[3].title,
  quantity: 2,
  amount: 3600,
},
{
  oderId: 3,
  user: user[1].name,
  meal: meal[0].title,
  quantity: 2,
  amount: 3600,
},
{
  oderId: 4,
  user: user[1].name,
  meal: meal[2].title,
  quantity: 5,
  amount: 3600,
},
];

export default orders;
