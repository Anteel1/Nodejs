const Category = require("../../models/category/Category");
const Food = require("../../models/food/Food");

// CLASS CONTROLLER
class FoodController {
  // [GET] ALL FOOD JSON
  getAllFood(req, res) {
    Food.find({})
      .then((User) => res.json(User))
      .catch((error) => res.json(error));
  }
  // [GET] RENDER FOOD + CATEGORIES INSIDE
  getAllFoodwithCategory(req, res) {
    Food.aggregate([
      {
        $lookup: {
          from: "categories",
          localField: "idCategory",
          foreignField: "_id",
          as: "category",
        },
      },
    ])
      .then((Category) => {
        // Food = Food.map((Food) => Food.toObject());
        res.json(Category);
        // render("allfood", {
        //   Food,
        // });
      })
      .catch((error) => res.json(error));
  }
  // [GET] RENDER FOOD + CATEGORIES INSIDE
  getAllFoodRender(req, res, next) {
    Food.aggregate([
      {
        $lookup: {
          from: "categories",
          localField: "idCategory",
          foreignField: "_id",
          as: "category",
        },
      },
    ])
      .then((Food) => {
        console.log(Food);
        res.render("food/allfood", {
          Food,
        });
      })
      .catch(next);
  }
  // [GET] GET FOOD INFOR BY ID
  getFoodInfor(req, res, next) {
    Food.findById(req.params.id)
      .then((Food) => {
        Food = Food.toObject();
        res.render("food/food", {
          Food,
        });
      })
      .catch(next);
  }
}

module.exports = new FoodController();
