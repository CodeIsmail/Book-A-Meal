import menuModel from '../models/menumodel';

class MenuControllers {
  static createMenu(req, res) {
    const {
      date, catererId, meals,
    } = req.body;

    if (!date || !catererId || !meals) {
      return res.status(400).json({
        status: 'error',
        message: 'Your request is missing parameters. Please verify and resubmit.',
      });
    }
    const menuId = menuModel.length + 1;
    menuModel.push(
      menuId,
      catererId,
      meals,
      date,
    );

    return res.status(200).json({
      status: 'success',
      data: menuModel[menuId],
    });
  }
}

module.exports = MenuControllers;
