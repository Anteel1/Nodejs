const User = require("../../models/user/User");

// CLASS CONTROLLER
class UserController {
  // [POST] SIGN UP
  postSignUp(req, res) {
    const formData = req.body;
    const newUser = new User(formData);
    newUser.save();
    res.redirect("user/alluser");
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
          res.send("Success !");
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
}

module.exports = new UserController();
