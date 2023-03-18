//  INIT ROUTE
const router = require("./constant");
const homeRouter = require("./home");
const userRouter = require("./user");
const signUpRouter = require("./user/auth/signup");
const signInRouter = require("./user/auth/signin");
const crudUpdateRouter = require("./user/crud/update");
const crudDeleteRouter = require("./user/crud/delete");
const chartPage = require("./chart/index");
const category = require("./product/category/index");
const food = require("./product/food/index");
const foodCRUD = require("./product/food/crud");
const newCategory = require("./product/category/create");
// ROUTER
const routes = (app) => {
  // [GET] USER INFORMATION
  app.use(router.USER, crudUpdateRouter);
  // [GET] USER INFORMATION
  app.use(router.USER, crudDeleteRouter);
  // [GET] LIST USER PAGE
  app.use(router.GET_ALL_USER, userRouter);
  // [GET] SIGN UP PAGE
  app.use(router.SIGNUP, signUpRouter);
  // [GET] SIGN IN PAGE
  app.use(router.SIGNIN, signInRouter);
  //[GET] HOME PAGE
  app.use(router.HOME, homeRouter);
  //[GET] CHART PAGE
  app.use(router.CHART, chartPage);
  //[GET] PRODUCT CATEGORY PAGE
  app.use(router.CATEGORY, category);
  //[GET] PRODUCT PAGE
  app.use(router.GET_ALL_FOOD, food);
  //[GET] CREATE CATEGORY PAGE
  app.use(router.NEWCATEGORY, newCategory);
  // [GET] FOOD INFOR
  app.use(router.FOOD, foodCRUD);
};

module.exports = routes;
