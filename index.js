const express=require("express")
const app=new express()

app.listen(5000,()=>console.log("listening to port 5000"))

app.get("/",(req,res)=>{
res.send("This is cool working okay");
})


