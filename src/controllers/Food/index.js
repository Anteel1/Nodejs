const Category = require("../../models/category/Category");
const Food = require("../../models/food/Food");

// CLASS CONTROLLER
class FoodController {
  // [GET] ALL FOOD JSON
  async getAllFood(req, res) {
    try {
      await Food.find({});
      res.status(200).json(User);
    } catch (error) {
      res.status(409).json({ error: error });
    }
  }
  // [GET] JSON FOOD + CATEGORIES INSIDE
  async getAllFoodwithCategory(req, res) {
    try {
      await Food.aggregate([
        {
          $lookup: {
            from: "categories",
            localField: "idCategory",
            foreignField: "_id",
            as: "category",
          },
        },
      ]).then((Food) => {
        res.status(200).json(Food);
      });
    } catch (error) {
      res.status(409).json({ error: error });
    }
  }
  // [GET] RENDER FOOD + CATEGORIES INSIDE
  async getAllFoodRender(req, res, next) {
    try {
      await Food.aggregate([
        {
          $lookup: {
            from: "categories",
            localField: "idCategory",
            foreignField: "_id",
            as: "category",
          },
        },
      ]).then((Food) => {
        res.render("food/allfood", {
          Food,
        });
      });
    } catch (error) {
      res.status(409).json({ error: error });
    }
  }
  // [GET] GET FOOD INFOR BY ID
  async getFoodInfor(req, res, next) {
    try {
      await Food.findById(req.params.id).then((Food) => {
        Food = Food.toObject();
        res.render("food/food", {
          Food,
        });
      });
    } catch (error) {
      res.status(409).json({ error: error });
    }
  }
}

module.exports = new FoodController();
