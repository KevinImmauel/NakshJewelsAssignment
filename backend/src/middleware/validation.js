const validation = {
    validateProduct: (req, res, next) => {
        const { name, price, imageUrl } = req.body;
        
        if (!name || typeof name !== 'string' || name.trim().length === 0) {
            return res.status(400).json({ error: "Name is required and must be a non-empty string" });
        }
        
        if (!price || typeof price !== 'number' || price <= 0) {
            return res.status(400).json({ error: "Price is required and must be a positive number" });
        }
        
        if (imageUrl && typeof imageUrl !== 'string') {
            return res.status(400).json({ error: "Image URL must be a string" });
        }
        
        next();
    },

    validateProductId: (req, res, next) => {
        const productId = parseInt(req.params.id);
        
        if (isNaN(productId) || productId <= 0) {
            return res.status(400).json({ error: "Invalid product ID" });
        }
        
        req.productId = productId;
        next();
    }
};

module.exports = validation;