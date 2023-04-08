const Category = require("../../models/category/Category");
const Food = require("../../models/food/Food");
const cloudinary = require("../../config/cloudinary/index");

// CLASS CONTROLLER
class FoodController {
  // [GET] ALL FOOD JSON
  async getAllFood(req, res) {
    try {
      await Food.find({});
      res.status(200).json(Food);
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
  // [GET] GET FOOD INFOR BY ID JSON
  async getFoodInfor(req, res, next) {
    try {
      await Food.findById(req.params.id).then((Food) => {
        Food = Food.toObject();
        res.status(200).json({ data: Food });
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
    try {
      const idRandom = Math.random() * 100000;
      const imgFile = req.file.path;
      // UPDATE TO CLOUD
      const upload = await cloudinary.uploader.upload(imgFile, {
        public_id: idRandom,
        resource_type: "image",
        transformation: {
          width: 50,
          height: 50,
        },
      });
      console.log(upload);
      const url = upload.secure_url;
      const formData = {
        name: req.body.name,
        description: req.body.description,
        idCategory: req.body.idCategory,
        cost: req.body.cost,
        inventory: req.body.inventory,
        img: url,
      };
      const newFood = new Food(formData);
      const result = await newFood.save();
      res.status(200).json(result);
    } catch (next) {
      console.log(next);
      res.send(next);
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
  // [GET] SEARCH FOOD BY NAME JSON
  async getSearchFoodByName(req, res, next) {
    try {
      await Food.find({ name: { $regex: req.body.search } }).then((Food) => {
        res.status(200).json({ Food });
      });
    } catch (error) {
      res.status(409).json({ error });
    }
  }
  // [GET] SEARCH FOOD RENDER
  async getSearchRenderFoodByName(req, res, next) {
    console.log(req.body.search);
    try {
      await Food.aggregate([
        {
          $match: {
            name: { $regex: req.body.search },
          },
        },
        {
          $lookup: {
            from: "categories",
            localField: "idCategory",
            foreignField: "_id",
            as: "category",
          },
        },
      ]).then((Food) => {
        if (Food.length != 0) {
          res.render("food/allfood", {
            Food,
          });
          return;
        }
        res.send("Không tìm thấy !!");
      });
    } catch (error) {
      res.status(409).json({ error });
    }
  }
}

module.exports = new FoodController();
