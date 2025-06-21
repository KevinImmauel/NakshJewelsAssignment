const path = require("path");

const config = {
    dataPath: path.join(__dirname, "../data/products.json"),
    development: {
        backup: true,
        autoSave: true
    },
    production: {
        backup: false,
        autoSave: false
    }
};

module.exports = config;