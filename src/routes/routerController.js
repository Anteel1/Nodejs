const routerController = {
  homeRouter: require("./home"),
  userRouter: require("./user"),
  signUpRouter: require("./user/auth/signup"),
  signInRouter: require("./user/auth/signin"),
  crudUpdateRouter: require("./user/crud/update"),
  crudDeleteRouter: require("./user/crud/delete"),
  chartPage: require("./chart/index"),
  category: require("./product/category/index"),
  food: require("./product/food/index"),
  foodCRUD: require("./product/food/crud"),
  newCategory: require("./product/category/create"),
  updateCategory: require("./product/category/update"),
  payment: require("./payment/index"),
  unity: require("./unity"),
};
module.exports = routerController;
