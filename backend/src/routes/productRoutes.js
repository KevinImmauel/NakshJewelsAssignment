const express = require("express");
const ProductController = require("../controllers/productController");
const { validateProduct, validateProductId } = require("../middleware/validation");

const router = express.Router();

router.get("/", ProductController.getAllProducts);

router.get("/:id", validateProductId, ProductController.getProductById);

router.post("/", validateProduct, ProductController.createProduct);

router.put("/:id", validateProductId, validateProduct, ProductController.updateProduct);

router.delete("/:id", validateProductId, ProductController.deleteProduct);

module.exports = router;