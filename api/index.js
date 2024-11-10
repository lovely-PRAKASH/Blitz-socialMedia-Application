import express from "express";
import mysql from "mysql2";
import user from "./routes/users.js"
const app=express();

app.use("/api/users",user)


app.listen(8000,()=>{
    console.log("server is connected to the port 8000")
})