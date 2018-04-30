import menuModel from '../models/menumodel';

class MenuControllers {
  static setMenu(req, res) {
    const {
      title, date, catererId, meals,
    } = req.body;

    if (!title || !date || !catererId || !meals) {
      return res.status(400).json({
        status: 'error',
        message: 'Your request is missing parameters. Please verify and resubmit.',
      });
    }

    const menuId = menuModel.length + 1;
    menuModel.push(
      menuId,
      title,
      date,
      meals,
    );

    return res.status(200).json({
      status: 'success',
      data: menuModel,
    });
  }
}

module.exports = MenuControllers;
