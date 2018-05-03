import menuModel from '../models/menumodel';
import mealModel from '../models/mealsmodel';

class MenuControllers {
  static createMenu(req, res) {
    const {
      date,
      catererId,
      meals,
    } = req.body;

    if (!date || !catererId || !meals) {
      return res.status(400).json({
        status: 'error',
        message: 'Your request is missing parameters. Please verify and resubmit.',
      });
    }

    console.log(meals);
    const menuId = menuModel.length + 1;
    menuModel.push({
      menuId,
      catererId,
      meals,
      date,
    });

    return res.status(201).json({
      status: 'success',
      menuModel,
    });
  }

  static getMenu(req, res) {
    // const { date } = req.params;
    const index = menuModel.findIndex(obj => obj.date === '05/05/2018');

    if (index === -1) {
      return res.status(404).json({ status: 'error', message: 'No menu for this date' });
    }

    const menuObj = menuModel.map((obj) => {
      const newMenuArray = [];
      const newArray = obj.meals.map((mealobj) => {
        let arr = [];
        arr = mealModel[mealobj - 1];
        // console.log(arr);
        return arr;
      });
      obj.meals = newArray;
      newMenuArray.push(obj);
      return newMenuArray;
    });
    // const menuObj = menuModel.filter((obj) => {
    //   const menu = obj;
    //   menu.meals = newArray;
    //   return menu;
    // });
    // console.log(menuObj);
    // map to string
    const mealArr = menuObj[index].meals.map((obj) => {
      let arr = [];
      arr = mealModel[obj - 1];
      return arr;
    });

    menuObj[index].meals = mealArr;
    return res.status(200).json({
      status: 'success',
      data: menuModel[index],
    });
  }
}

module.exports = MenuControllers;
