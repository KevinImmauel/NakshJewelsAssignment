const express = require("express");
const data = require("./products.json").products;
const cors = require('cors');
const path = require("path");
const fs = require("fs/promises");
const dataPath = path.join(__dirname, "products.json");

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
  }));

app.use(express.json());

app.get("/api/products", async (req, res) => {
    res.send(data);
});

app.post("/api/products", async (req, res) => {
    try {
        let name = req.body.name;
        let price = req.body.price;
        let nid = data.length;
        let imageUrl = req.body.imageUrl;
        data.push({
            id: nid,
            name: name,
            price: price,
            imageUrl: imageUrl,
        });

        await fs.writeFile(dataPath, JSON.stringify({ products: data }, null, 2));

        res.send({ msg: "Successfully added" });
    } catch (err) {
        console.log(err);
        res.status(500).send({ err: "An error occured" });
    }
});

app.get("/api/products/:id", async (req, res) => {
    try {
        let id = req.params.id;
        
        let product = data[parseInt(id)]

        res.send(product);
    } catch (err) {
        console.log(err);
        res.status(500).send({ err: "An error occured" });
    }
});

app.delete("/api/products/:id", async (req, res) => {
    try {
        let id = req.params.id;
        data.splice(id, 1);

        await fs.writeFile(dataPath, JSON.stringify({ products: data }, null, 2));

        res.send({ msg: "Successfully deleted" });
    } catch (err) {
        console.log(err);
        res.status(500).send({ err: "An error occured, product not found" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});
