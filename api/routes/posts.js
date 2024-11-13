import express from "express";
import { addPost, getPosts } from "../controllers/postControllers.js";

const router=express.Router();

router.get("/",getPosts)
router.get("/", addPost)

export default router;