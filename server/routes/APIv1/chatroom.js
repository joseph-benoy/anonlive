import express, { Router } from "express";
import { newRoom } from "../../controllers/chatroom.js";
import { newChatRoomFiles } from "../../middlewares/multer.js";
const router = express.Router();

router
.post("/new",newChatRoomFiles.fields([{name:"icon"},{name:"dp"}]),newRoom)


export  { router as chatRoomRouter};