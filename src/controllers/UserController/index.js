const User = require("../../models/user/User");
// FUNCTION CONTROLLER

// CLASS CONTROLLER
class UserController {
  // [POST] SIGN UP
  postSignUp(req, res) {
    res.json(req.body);
  }
  // [POST] SIGN IN
  postSignIn(req, res) {
    res.json(req.body);
  }
  // [GET] SIGNUP PAGE
  getSignUpPage(req, res) {
    res.render("signup");
  }
  // [GET] SIGNIN PAGE
  getSignInPage(req, res) {
    res.render("signin");
  }
  // [GET] ALL USER
  getAllUser(req, res) {
    User.find({})
      .then((User) => res.json(User))
      .catch((error) => res.json(error));
  }
}

module.exports = new UserController();
