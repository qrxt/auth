const { validationResult } = require("express-validator");
const ApiError = require("../exceptions/api-error");
const userService = require("../service/user-service");

class UserController {
  async register(req, res, next) {
    try {
      const thirtyDays = 30 * 24 * 60 * 60 * 1000;

      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest("Validation error", errors.array()));
      }

      const { email, password } = req.body;
      const userData = await userService.register(email, password);
      console.log("hello", userData);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: thirtyDays,
        httpOnly: true,
      });
      res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async login(req, res, next) {
    try {
    } catch (e) {
      next(e);
    }
  }

  async logout(req, res, next) {
    try {
    } catch (e) {
      next(e);
    }
  }

  async activate(req, res, next) {
    try {
      const { activationLink } = req.params.link;

      await userService.activate(activationLink);

      return res.redirect(process.env.CLIENT_URL);
    } catch (e) {
      next(e);
    }
  }

  async refresh(req, res, next) {
    try {
    } catch (e) {
      next(e);
    }
  }

  async getUsers(req, res, next) {
    try {
      res.json("hello");
    } catch (e) {
      next(e);
    }
  }
}

const userController = new UserController();
module.exports = userController;
