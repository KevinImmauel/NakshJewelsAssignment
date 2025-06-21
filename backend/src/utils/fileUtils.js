const fs = require("fs/promises");
const config = require("../../config/database");

class FileUtils {
    static async readProductsData() {
        try {
            const fileContent = await fs.readFile(config.dataPath, 'utf8');
            return JSON.parse(fileContent).products || [];
        } catch (err) {
            console.error('Error reading products file:', err);
            return [];
        }
    }

    static async writeProductsData(products) {
        try {
            await fs.writeFile(config.dataPath, JSON.stringify({ products }, null, 2));
            return true;
        } catch (err) {
            console.error('Error writing products file:', err);
            throw new Error('Failed to save products data');
        }
    }

    static async ensureDataDirectory() {
        const dataDir = path.dirname(config.dataPath);
        try {
            await fs.mkdir(dataDir, { recursive: true });
        } catch (err) {
            console.error('Error creating data directory:', err);
        }
    }
}

module.exports = FileUtils;