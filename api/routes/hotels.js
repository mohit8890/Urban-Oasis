import express from "express";
import { deleteHotel,createHotel,updateHotel,getHotel,getHotels, countByCity, countByType, getHotelRooms } from "../controllers/hotel.js";
import {verifyAdmin} from "../utils/verifyToken.js"

 const router=express.Router();

 //create
//  router.post("/",verifyAdmin,createHotel);
 router.post("/",createHotel);

 //update
//  router.put("/:id",verifyAdmin,updateHotel);
 router.put("/:id",updateHotel);

 //delete
//  router.delete("/:id",verifyAdmin,deleteHotel);
 router.delete("/:id",deleteHotel);

 //get
 router.get("/find/:id",getHotel);

 //get all
 router.get("/",getHotels);
 router.get("/countByCity",countByCity);
 router.get("/countByType",countByType);
 router.get("/room/:id",getHotelRooms);

 export default router