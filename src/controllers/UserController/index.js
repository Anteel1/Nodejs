const User = require("../../models/user/User");
// FUNCTION CONTROLLER

// CLASS CONTROLLER
class UserController {
  // [POST] SIGN UP
  postSignUp(req, res) {
    const formData = req.body;
    const newUser = new User(formData);
    newUser.save();
    res.send("success !");
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
  // [GET] ALL USER JSON
  getAllUser(req, res) {
    User.find({})
      .then((User) => res.json(User))
      .catch((error) => res.json(error));
  }
  // [GET] ALL USER RENDER LIST
  getAllUserRender(req, res) {
    User.find({})
      .then((User) => {
        User = User.map((User) => User.toObject());
        res.render("alluser", {
          User,
        });
      })
      .catch((error) => res.json(error));
  }
  // [GET] USER INFOR
  getUserInfor(req, res, next) {
    User.findOne({ username: req.params.slug })
      .then((User) => {
        User = User.toObject();
        res.render("user", {
          User,
        });
      })
      .catch(next);
  }
}

module.exports = new UserController();
