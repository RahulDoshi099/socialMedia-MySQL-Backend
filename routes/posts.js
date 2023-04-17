import express from "express";
import { addPost, getPosts } from "../conrollers/posts.js";

const router = express.Router();

router.get("/posts", getPosts);

router.post("/post", addPost);

export default router;
