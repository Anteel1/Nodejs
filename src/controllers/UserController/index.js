const transporter = require("../../config/mail/index");
const env = require("../../../env");
const User = require("../../models/user/User");

// CLASS CONTROLLER
class UserController {
  // [POST] SIGN UP
  async postSignUpAPI(req, res, next) {
    const formData = req.body;
    try {
      const newUser = new User(formData);
      await newUser.save();
      res.status(200).json({ status: "Success !" });
    } catch (error) {
      res.status(409).json({ erro: error });
      // }
    }
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
          res.status(200).json({ success: "Login success !", data: user });
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
  // [POST] SIGN IN
  async postSignInSocial(req, res, next) {
    try {
      // check if the user exists
      const user = await User.findOne({ username: req.body.username });
      if (user) {
        //check if password matches
        const result = req.body.password === user.password;
        if (result) {
          res.status(200).json({ success: "Login success !", data: user });
        } else {
          res.status(400).json({ error: "password doesn't match" });
        }
      } else {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).json({ status: "Success !" });
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
  async getAllUser(req, res) {
    try {
      const result = await User.find({});
      res.status(200).json(result);
    } catch (error) {
      res.status(409).json({ error: error });
    }
  }
  // [GET] ALL USER RENDER LIST
  async getAllUserRender(req, res) {
    try {
      await User.find({}).then((User) => {
        User = User.map((User) => User.toObject());
        res.render("user/alluser", {
          User,
        });
      });
    } catch (error) {
      res.status(409).json({ error: error });
    }
  }
  // [GET] USER INFOR BY ID
  async getUserInfor(req, res, next) {
    try {
      await User.findById(req.params.id).then((User) => {
        User = User.toObject();
        res.render("user/user", {
          User,
        });
      });
    } catch (error) {
      res.status(409).json({ error: error });
    }
  }
  // [POST] USER UPDATE BY ID
  async postUpdateUser(req, res, next) {
    const formData = req.body;
    try {
      await User.updateOne({ _id: req.params.id }, formData);
      res.status(200).json({ success: "Success !" });
    } catch (error) {
      res.status(409).json({ erro: error });
    }
  }
  // [GET] FORGOT PASSWORD PAGE
  getForgotPassword(req, res, next) {
    res.render("user/forgotpassword");
  }
  // [POST] FORGOT PASSWORD
  async postForgotPassword(req, res, next) {
    const user = await User.findOne({ username: req.body.username }).then(
      (user) => {
        if (user) {
          try {
            user = user.toObject();
            var mailOptions = {
              from: env.email.user,
              to: user.email,
              subject: "Verify",
              text: "Your password is :" + user.password,
            };

            transporter.sendMail(mailOptions, function (error, info) {
              if (error) {
                console.log(error);
              } else {
                console.log("Email sent: " + info.response);
                res.send("Mail have sent to:" + user.email);
              }
            });
          } catch (error) {
            res.send("Failed !!");
          }
        } else {
          res.status(409).json({ error: "Can't find username" });
        }
      }
    );
  }
  // [POST] DELETE USER
  postDeleteUser(req, res, next) {
    User.findByIdAndDelete({ _id: req.params.id })
      .then(() => {
        res.status(200).json({ success: "Success !" });
      })
      .catch(next);
  }
}

module.exports = new UserController();
