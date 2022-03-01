import express from 'express';
import { addCategory } from '../../controllers/category.js';

const router = express.Router();

router.post("/new",addCategory);

export  { router as CategoryRouter};