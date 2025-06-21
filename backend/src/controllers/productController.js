const ProductService = require("../services/productService");

class ProductController {
    static async getAllProducts(req, res) {
        try {
            const products = await ProductService.getAllProducts();
            res.json(products);
        } catch (err) {
            console.error('Error fetching products:', err);
            res.status(500).json({ error: "Failed to fetch products" });
        }
    }

    static async getProductById(req, res) {
        try {
            const product = await ProductService.getProductById(req.productId);
            
            if (!product) {
                return res.status(404).json({ error: "Product not found" });
            }
            
            res.json(product);
        } catch (err) {
            console.error('Error fetching product:', err);
            res.status(500).json({ error: "Failed to fetch product" });
        }
    }

    static async createProduct(req, res) {
        try {
            const newProduct = await ProductService.createProduct(req.body);
            
            res.status(201).json({ 
                message: "Product successfully added",
                product: newProduct 
            });
        } catch (err) {
            console.error('Error adding product:', err);
            res.status(500).json({ error: "Failed to add product" });
        }
    }

    static async updateProduct(req, res) {
        try {
            const updatedProduct = await ProductService.updateProduct(req.productId, req.body);
            
            if (!updatedProduct) {
                return res.status(404).json({ error: "Product not found" });
            }
            
            res.json({ 
                message: "Product successfully updated",
                product: updatedProduct
            });
        } catch (err) {
            console.error('Error updating product:', err);
            res.status(500).json({ error: "Failed to update product" });
        }
    }

    static async deleteProduct(req, res) {
        try {
            const deletedProduct = await ProductService.deleteProduct(req.productId);
            
            if (!deletedProduct) {
                return res.status(404).json({ error: "Product not found" });
            }
            
            res.json({ 
                message: "Product successfully deleted",
                product: deletedProduct
            });
        } catch (err) {
            console.error('Error deleting product:', err);
            res.status(500).json({ error: "Failed to delete product" });
        }
    }
}

module.exports = ProductController;