import express from "express";
import { getPost } from "../controllers/postControllers.js";

const router=express.Router();

router.get("/find/:userId",getPost)

export default router;