const Category = require("../../models/category/Category");
const Food = require("../../models/food/Food");
const cloudinary = require("../../config/cloudinary/index");

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
  // [POST] FOOD UPDATE BY ID
  async postUpdateFood(req, res, next) {
    const formData = req.body;
    try {
      await Food.updateOne({ _id: req.params.id }, formData);
      res.status(200).json({ success: "Success !" });
    } catch (error) {
      res.status(409).json({ erro: error });
    }
  }
  // [POST] CREATE FOOD
  async postCreateFood(req, res, next) {
    const idRandom = Math.random() * 100000;
    const imgFile = req.file.path;
    try {
      // UPDATE TO CLOUD
      const res = cloudinary.uploader.upload(imgFile, {
        public_id: idRandom,
        resource_type: "image",
      });
      // Generate
      const url = cloudinary.url(idRandom, {
        width: 100,
        height: 100,
        Crop: "fill",
      });
      // The output url
      console.log(url);
      const formData = {
        name: req.body.name,
        description: req.body.description,
        idCategory: req.body.idCategory,
        cost: req.body.cost,
        inventory: req.body.inventory,
        img: url,
      };
      const newFood = new Food(formData);
      await newFood.save();
      res.status(200).json({ status: "Success !" });
    } catch (error) {
      res.send(error);
      // }
    }
  }
  // [GET] CREATE PAGE
  getCreateFood(req, res, next) {
    res.render("food/newfood");
  }
  // [POST] DELETE FOOD
  postDeleteFood(req, res, next) {
    Food.findByIdAndDelete({ _id: req.params.id })
      .then(() => {
        res.status(200).json({ success: "Success !" });
      })
      .catch(next);
  }
}

module.exports = new FoodController();
