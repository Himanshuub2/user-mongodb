import express from "express"
import {addUser,getUser} from "./controls.js"

export const router = express.Router();

router.post("/signup",addUser);
router.get("/userdetails",getUser);