const User = require("../../models/user/User");
// FUNCTION CONTROLLER

// CLASS CONTROLLER
class UserController {
  // [POST] SIGN UP
  postSignUp(req, res) {
    const formData = req.body;
    const newUser = new User(formData);
    newUser.save();
    res.redirect("/alluser");
  }
  // [POST] SIGN IN
  postSignIn(req, res, next) {
    User.findOne(
      { username: req.body.username },
      { password: req.body.password }
    )
      .then(() => res.send("Login Success !"))
      .catch(next);
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
  // [GET] USER INFOR BY ID
  getUserInfor(req, res, next) {
    User.findById(req.params.id)
      .then((User) => {
        User = User.toObject();
        res.render("user", {
          User,
        });
      })
      .catch(next);
  }
  // [POST] USER UPDATE BY ID
  postUpdateUser(req, res, next) {
    User.updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        res.redirect("/alluser");
      })
      .catch(next);
  }
}

module.exports = new UserController();
