const createTestSendEmail = require("../../config/mail/index");
const User = require("../../models/user/User");

// CLASS CONTROLLER
class UserController {
  // [POST] SIGN UP
  postSignUpAPI(req, res, next) {
    const formData = req.body;
    const newUser = new User(formData);
    newUser
      .save()
      .then(res.status(200).json({ success: "Sign up success!" }))
      .catch(res.send(next));
    // res.render("user/alluser");
  }
  // [POST] SIGN IN
  async postSignIn(req, res, next) {
    try {
      // check if the user exists
      const user = await User.findOne({ username: req.body.username });
      if (user) {
        //check if password matches
        const result = req.body.password === user.password;
        if (result) {
          res.status(200).json({ success: "Login success !" });
        } else {
          res.status(400).json({ error: "password doesn't match" });
        }
      } else {
        res.status(400).json({ error: "User doesn't exist" });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  }
  // [GET] SIGNUP PAGE
  getSignUpPage(req, res) {
    res.render("user/signup");
  }
  // [GET] SIGNIN PAGE
  getSignInPage(req, res) {
    res.render("user/signin");
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
        res.render("user/alluser", {
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
        res.render("user/user", {
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
  // [GET] FORGOT PASSWORD PAGE
  getForgotPassword(req, res, next) {
    res.render("user/forgotpassword");
  }
  // [POST] FORGOT PASSWORD
  postForgotPassword(req, res, next) {
    User.findOne({ username: req.body.username })
      .then((User) => {
        createTestSendEmail();
        User = User.toObject();
        res.json(User);
      })
      .catch(next);
  }
}

module.exports = new UserController();
