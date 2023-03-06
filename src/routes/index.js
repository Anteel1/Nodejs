//  INIT ROUTE
const router = require("./constant");
const homeRouter = require("./home");
const userRouter = require("./user");
const signUp = require("./user/auth/signup");
const signIn = require("./user/auth/signin");

const routes = (app) => {
  // [GET] SIGN UP PAGE
  app.use(router.SIGNUP, signUp);
  // [GET] SIGN IN PAGE
  app.use(router.SIGNIN, signIn);
  //[GET] HOME PAGE
  app.use(router.HOME, homeRouter);
};

module.exports = routes;
