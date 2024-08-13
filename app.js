const express=require("express");
const app=express();
const PORT=process.env.PORT||5000;
const products_routes=require("./routes/index")
app.get("/",(req,res)=>{
    res.send("Hi there")
})

app.use("/api/products",products_routes)

app.listen(PORT,()=>{
    console.log(`Connection is established at port number ${PORT}`)
})