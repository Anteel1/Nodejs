const Category = require("../../models/category/Category");

// CLASS CONTROLLER
class CategoryController {
  //[GET] ALL CATEGORY  JSON
  async getCategoryAPIP(req, res, next) {
    await Category.find({})
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
      const newCategory = new Category(formData);
      const newCate = await newCategory.save();
      if (newCate) {
        res.json({ status: "Success !" });
      }
    } catch (error) {
      res.json({ error: error });
    }
  }
  // [GET] CATEGORY INFOR
  async getCategoryInfor(req, res, next) {
    try {
      await Category.findById(req.params.id).then((Category) => {
        Category = Category.toObject();
        res.render("category/category", {
          Category,
        });
      });
    } catch (error) {
      res.status(409).json({ error: error });
    }
  }
  // [POST] CATEGORY UPDATE BY ID
  async postUpdateCategory(req, res, next) {
    const formData = req.body;
    try {
      await Category.updateOne({ _id: req.params.id }, formData);
      res.status(200).json({ success: "Success !" });
    } catch (error) {
      res.status(409).json({ erro: error });
    }
  }
}

module.exports = new CategoryController();
