import express from "express";
const productRouter = express.Router();
import auth from "../middlewares/auth";
import Product from "../models/product";



productRouter.get("/api/products", admin, async (req, res) => {
  try {

    const products = await Product.find({category: req.query.category});
    res.json(products);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

export default productRouter;
