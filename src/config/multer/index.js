const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Math.round(Math.random() * 1000000);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

module.exports = multer({ storage: storage });
