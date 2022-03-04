import express from "express";
import { CategoryRouter } from "./category.js";
import { chatRoomRouter } from "./chatroom.js";

const router = express.Router();

router.use("/category",CategoryRouter);
router.use("/chatroom",chatRoomRouter);
export default router;