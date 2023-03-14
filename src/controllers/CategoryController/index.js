const Category = require("../../models/category/Category");

// CLASS CONTROLLER
class CategoryController {
  //[GET] ALL CATEGORY  JSON
  getCategoryAPIP(req, res, next) {
    Category.find({})
      .then((Category) => res.json(Category))
      .catch((error) => res.json(error));
  }
  //[GET] ALL CATEGORY
  getCategory(req, res, next) {
    Category.find({})
      .then((Category) => {
        Category = Category.map((Category) => Category.toObject());
        res.render("allcategory", {
          Category,
        });
      })
      .catch((error) => res.json(error));
  }
  //[GET] CREATE CATEGORY PAGE
  getNewCategory(req, res, next) {
    res.render("newcategory");
  }
  // [POST] SPOST CREATE CATEGORY
  postCreate(req, res) {
    const formData = req.body;
    const newCategory = new Category(formData);
    newCategory.save();
    res.redirect("/allcategory");
  }
}

module.exports = new CategoryController();
