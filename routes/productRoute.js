const express = require("express");

const router = express.Router();

const {
  getProducts,
  getProductsTesting,
} = require("../controllers/productController");

router.route("/").get(getProducts);
router.route("/testing").get(getProductsTesting);

module.exports = router;
