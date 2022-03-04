
import multer from "multer";

export const newChatRoomFiles = multer({
    storage:multer.memoryStorage()
});
