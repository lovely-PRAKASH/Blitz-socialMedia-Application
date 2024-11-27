import express from "express";
import { getLikes } from "../controllers/likesControllers.js";

const router=express.Router();

router.get("/",getLikes)

export default router;