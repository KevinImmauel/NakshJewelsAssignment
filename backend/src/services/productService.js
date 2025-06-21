const FileUtils = require("../utils/fileUtils");

class ProductService {
    static async getAllProducts() {
        return await FileUtils.readProductsData();
    }

    static async getProductById(id) {
        const products = await FileUtils.readProductsData();
        return products.find(p => p.id === parseInt(id));
    }

    static async createProduct(productData) {
        const products = await FileUtils.readProductsData();
        const { name, price, imageUrl } = productData;
        
        // Generate new ID based on existing products
        const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
        
        const newProduct = {
            id: newId,
            name: name.trim(),
            price: parseFloat(price),
            imageUrl: imageUrl || null,
            createdAt: new Date().toISOString()
        };
        
        products.push(newProduct);
        await FileUtils.writeProductsData(products);
        
        return newProduct;
    }

    static async updateProduct(id, productData) {
        const products = await FileUtils.readProductsData();
        const productIndex = products.findIndex(p => p.id === parseInt(id));
        
        if (productIndex === -1) {
            return null;
        }
        
        const { name, price, imageUrl } = productData;
        
        products[productIndex] = {
            ...products[productIndex],
            name: name.trim(),
            price: parseFloat(price),
            imageUrl: imageUrl || products[productIndex].imageUrl,
            updatedAt: new Date().toISOString()
        };
        
        await FileUtils.writeProductsData(products);
        return products[productIndex];
    }

    static async deleteProduct(id) {
        const products = await FileUtils.readProductsData();
        const productIndex = products.findIndex(p => p.id === parseInt(id));
        
        if (productIndex === -1) {
            return null;
        }
        
        const deletedProduct = products.splice(productIndex, 1)[0];
        await FileUtils.writeProductsData(products);
        
        return deletedProduct;
    }

    static async productExists(id) {
        const product = await this.getProductById(id);
        return product !== undefined;
    }
}

module.exports = ProductService;