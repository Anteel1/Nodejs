//  INIT ROUTE
const router = require("./constant");
const routerController = require("./routerController");
// ROUTER
const routes = (app) => {
  // [GET] USER INFORMATION
  app.use(router.USER, routerController.crudUpdateRouter);
  // [GET] USER INFORMATION
  app.use(router.USER, routerController.crudDeleteRouter);
  // [GET] LIST USER PAGE
  app.use(router.GET_ALL_USER, routerController.userRouter);
  // [GET] SIGN UP PAGE
  app.use(router.SIGNUP, routerController.signUpRouter);
  // [GET] SIGN IN PAGE
  app.use(router.SIGNIN, routerController.signInRouter);
  //[GET] HOME PAGE
  app.use(router.HOME, routerController.homeRouter);
  //[GET] CHART PAGE
  app.use(router.CHART, routerController.chartPage);
  //[GET] PRODUCT CATEGORY PAGE
  app.use(router.ALLCATEGORY, routerController.category);
  //[GET] ITEM CATEGORY PAGE
  app.use(router.CATEGORY, routerController.updateCategory);
  //[GET] PRODUCT PAGE
  app.use(router.GET_ALL_FOOD, routerController.food);
  //[GET] CREATE CATEGORY PAGE
  app.use(router.NEWCATEGORY, routerController.newCategory);
  // [GET] FOOD INFOR
  app.use(router.FOOD, routerController.foodCRUD);
  // [GET] PAYMENT PAGE
  app.use(router.PAYMENT, routerController.payment);
};

module.exports = routes;
