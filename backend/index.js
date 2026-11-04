import express from 'express';
import { connectDB } from './DB/connectDB';



const app = express();

app.get("/",(req,res)=>{
    res.send("Hello World! ");
})

app.listen(3000,()=>{
    connectDB();
    console.log("Server is running on port 3000");
});