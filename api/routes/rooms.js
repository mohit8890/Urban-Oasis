import express from "express";
import { getRoom, getselectedRooms, updateRoomAvailability } from "../controllers/room.js";
import { getRooms } from "../controllers/room.js";
import { deleteRoom } from "../controllers/room.js";
import { updateRoom } from "../controllers/room.js";
import { createRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

 const router=express.Router();

//  router.post("/:hotelid",verifyAdmin,createRoom);
 router.post("/:hotelid",createRoom);

 //update
//  router.put("/:id",verifyAdmin,updateRoom);
 router.put("/:id",updateRoom);
 router.put("/availability/:id",updateRoomAvailability);

 //delete
//  router.delete("/:id/:hotelid",verifyAdmin,deleteRoom);
 router.delete("/:id/:hotelid",deleteRoom);

 //get
 router.get("/:id",getRoom);

 //get all
 router.get("/",getRooms);
 router.get("/room/:id",getselectedRooms)

 export default router