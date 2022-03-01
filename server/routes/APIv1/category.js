import express from 'express';
import { addCategory, getCategories } from '../../controllers/category.js';

const router = express.Router();

router
.post("/new",addCategory)
.get("/all",getCategories)

export  { router as CategoryRouter};