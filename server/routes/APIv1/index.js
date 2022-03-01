import express from "express";
import { CategoryRouter } from "./category.js";

const router = express.Router();

router.use("/category",CategoryRouter);

export default router;