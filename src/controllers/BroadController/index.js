const transporter = require("../../config/mail/index");
const env = require("../../../env");
const Broad = require("../../models/unity/scoreBroad/Broad");

// CLASS CONTROLLER
class BroadController {
  // [GET] GET ALL BROAD
  getAll(req, res, next) {
    try {
      Broad.find({})
        .sort({ time: 1 })
        .then((Broad) => {
          res.status(200).json(Broad);
        });
    } catch (error) {
      res.status(409).send(error);
    }
  }
  // [POST] BROAD
  async insert(req, res, next) {
    try {
      const value = Broad.findOne({ name: req.body.name })
        .then((value) => {
          try {
            Broad.updateOne({ _id: value._id }, req.body);
          } catch (error) {
            console.log(error);
          }
        })
        .catch((erro) => {
          const newBroad = new Broad(req.body);
          newBroad.save();
        });
      res.status(200).json({ status: 200 });
    } catch (error) {
      res.status(409).json({ status: 409, erro: error });
    }
  }
}

module.exports = new BroadController();
