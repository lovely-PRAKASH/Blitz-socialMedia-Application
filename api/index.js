import express from "express";
import cors from "cors"
import user from "./routes/users.js";
import auth from "./routes/auth.js";
import posts from "./routes/posts.js";
import comments from "./routes/comments.js";
import likes from "./routes/likes.js";
import relationship from "./routes/relationship.js"
import cookieParser from "cookie-parser";
import multer from "multer";
const app = express();
// middlewares
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true)
    next();
})
app.use(express.json());
app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true,
    }
));
app.use(cookieParser());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../frontend/public/upload')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    },
})
const upload = multer({ storage: storage })
app.use("/api/upload", upload.single("file"),(req,res)=>{
    const file=req.file;
    res.status(200).json(file.filename);
})

app.use("/api/auth", auth)
app.use("/api/users", user)
app.use("/api/posts", posts)
app.use("/api/comments", comments)
app.use("/api/likes", likes)
app.use("/api/relationships", relationship);



app.listen(8000, () => {
    console.log("server is connected to the port 8000")
})

