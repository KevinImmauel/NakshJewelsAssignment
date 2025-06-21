const express = require("express");
const cors = require('cors')
const productRoutes = require("./src/routes/productRoutes");

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
  }));

app.use(express.json());

app.use("/api/products", productRoutes);

app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({ error: "Internal server error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});