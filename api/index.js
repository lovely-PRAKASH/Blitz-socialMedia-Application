import express from "express";
import mysql from "mysql2";
import user from "./routes/users.js";
import auth from "./routes/auth.js";
import posts from "./routes/posts.js";
import comments from "./routes/comments.js";
import likes from "./routes/likes.js";
const app = express();

app.use("/api/auth", auth)
app.use("/api/users", user)
app.use("/api/posts", posts)
app.use("/api/comments", comments)
app.use("/api/likes", likes)



app.listen(8000, () => {
    console.log("server is connected to the port 8000")
})