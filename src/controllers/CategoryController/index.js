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
        res.render("category/allcategory", {
          Category,
        });
      })
      .catch((error) => res.json(error));
  }
  //[GET] CREATE CATEGORY PAGE
  getNewCategory(req, res, next) {
    res.render("category/newcategory");
  }
  // [POST] SPOST CREATE CATEGORY
  async postCreate(req, res) {
    const formData = req.body;
    try {
      const food = await Category.findOne({ name: formData.name });
      if (food) {
        res.status(409).json({ status: "Category already exist !" });
      } else {
        const newCategory = new Category(formData);
        newCategory.save();
        res.json({ status: "Success !" });
      }
    } catch (error) {
      res.json({ status: "Failed !" });
    }
  }
}

module.exports = new CategoryController();
