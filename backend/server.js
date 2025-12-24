const express = require ("express");
const connectDB = require("./config/db")
const todo =require ("./models/todo")
const cors= require("cors")
const app = express();
const dotenv = require("dotenv")
dotenv.config();
connectDB();
app.use(express.json())
app.use(cors())
app.get("/",async(req,res)=>{
  try{
    const data=await todo.find();
    res.status(201).json(data)
  }catch(err){
    res.send(err);
  }
   res.send("Get route working")
})
app.post("/create",async(req,res)=>{
    try{
     const newTodo=new todo(req.body);
     const data = await newTodo.save();
     res.status(201).json(data);
    }catch(err){
      res.send(err)
    }
})
app.put("/update/:id",async(req,res)=>{
  try{
const updateTask =await todo.findByIdAndUpdate(req.params.id,req.body,{new:true});
res.status(201).json(updateTask);
  }catch(err){
    res.send(err);
  }
})
app.delete("/delete/:id",async(req,res)=>{
  try{
    await todo.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message:"Task Deleted successfully"
    })
  }catch(err){
    res.send(err)
  }
})   
 const PORT = process.env.PORT  
app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
})