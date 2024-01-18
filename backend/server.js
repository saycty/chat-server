import express from "express";
import cors from "cors";
import DB from "./db.js";
import dotenv from "dotenv";
import userRoute from "./Routes/userRoute.js";
import chatRoute from "./Routes/chatRoute.js";
dotenv.config()
DB(process.env.MONGO_URL);

const app=express();
app.use(express.json())
app.use(cors());
app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);

//CRUD

app.get('/',(req,res)=>{
    res.send("hello")
})
const port=process.env.PORT||8000;
app.listen(port,()=>{
    console.log(`server is running in http://localhost:${port}`);
});