import express from "express";
import cors from "cors"
import user from "./routes/users.js";
import auth from "./routes/auth.js";
import posts from "./routes/posts.js";
import comments from "./routes/comments.js";
import likes from "./routes/likes.js";
import cookieParser from "cookie-parser";
const app = express();
// middlewares
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Credentials", true)
    next();
})
app.use(express.json());
app.use(cors(
    {
        origin:"http://localhost:5173",
        // credentials:true,
    }
));
app.use(cookieParser());

app.use("/api/auth", auth)
app.use("/api/users", user)
app.use("/api/posts", posts)
app.use("/api/comments", comments)
app.use("/api/likes", likes)



app.listen(8000, () => {
    console.log("server is connected to the port 8000")
})