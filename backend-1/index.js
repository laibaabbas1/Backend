const express=require('express');

const app= express();
const port = 9999;

const jokes= [{
    name: "laiba",
    age: 20,

}]


app.get("/",(req,res)=>{
    res.status(200).send("Hello world");
    console.log ("Hello world");
})
app.get("/about",(req,res)=>{
    res.send("its about page here");
    console.log ("its about page here")
})
app.get("/about/laiba/jokes",(req,res)=>{
    res.send("its about page here laiba");
  console.log ("its about page here laiba")
  console.log(jokes);
  
})

app.listen (port,()=>{
    console.log(`server is running on port  ${port}`)
})