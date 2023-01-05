const userService = require("../service/user-service");

class UserController {
  async register(req, res, next) {
    try {
      const thirtyDays = 30 * 24 * 60 * 60 * 1000;

      const { email, password } = req.body;
      const userData = await userService.register(email, password);
      console.log("hello", userData);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: thirtyDays,
        httpOnly: true,
      });
      res.json(userData);
    } catch (e) {}
  }

  async login(req, res, next) {
    try {
    } catch (e) {}
  }

  async logout(req, res, next) {
    try {
    } catch (e) {}
  }

  async activate(req, res, next) {
    try {
    } catch (e) {}
  }

  async refresh(req, res, next) {
    try {
    } catch (e) {}
  }

  async getUsers(req, res, next) {
    try {
      res.json("hello");
    } catch (e) {}
  }
}

const userController = new UserController();
module.exports = userController;
