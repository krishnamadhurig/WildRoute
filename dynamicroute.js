const express = require("express");
const app = express();

app.get('/home',(req,res)=>{
  res.send("Welcome to Home Page")
})

app.get('/welcome/:username',(req,res)=>{
  const username=req.params.username;//route parameter
  const role=req.query.role;//query parameter
  res.send(`Welcome ${username},your role is ${role}`)
})
app.get('/contact1/:userid',(req,res)=>{
  const id=req.params.userid;
  const name=req.query.name;
  const age=req.query.age;
  res.send(`Hello this is contact1 for user ${id} - ${name},${age}`)
})
app.get('/about',(req,res)=>{
  res.send("Hello this is about page")
})
app.listen(3000,()=>{
  console.log("Server is running on 3000")
})