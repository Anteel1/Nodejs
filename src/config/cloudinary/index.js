const cloudinary = require("cloudinary").v2;
const cloudinaryConfig = require("../../../env");
// Configuration
cloudinary.config({
  cloud_name: cloudinaryConfig.CLOUDDINARY_CONFIG.cloud_name,
  api_key: cloudinaryConfig.CLOUDDINARY_CONFIG.api_key,
  api_secret: cloudinaryConfig.CLOUDDINARY_CONFIG.api_secret,
});

module.exports = cloudinary;
