import express from "express";
import {
  createRoom,
  getAllRooms,
  getRoomById,
  updateRoom,
  deleteRoom,
} from "../controller/room.controller.js";

const router = express.Router();
//mapping to function to handle request
router.post("/", createRoom);
router.get("/", getAllRooms);
router.get("/:id", getRoomById);
router.patch("/:id", updateRoom);
router.delete("/:id", deleteRoom);
router.get("/", (req,res) => {
  res.send('hello world')
})
export default router;