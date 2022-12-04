//impo/expo
import "dotenv/config"  //it must be the first 
import express from "express"
import mongoose from "mongoose";
import bookRouter from "./routes/bookRoute.js";  
import  cors from "cors"   
import  connections  from "../database/connections/conn.js"; //this is the conn fun db



//middleware
const app=express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(express.static("public"))


//routing
app.get("/",(req,res)=>{
    res.send("<h1>this is mern book CRUD app<h1>")
})

app.use("/book",bookRouter); //all about the book route  http://localhost:8000/book/add/update



//listenn to port
app.listen(process.env.PORT || 8000 ,async()=>{
console.log(` backend server through ${process.env.PORT }port 🚀🚀🚀🚀🚀🚀`);
//db conn fun
connections()
})
