const express=require("express");
const router=express.Router();
const {getProducts,getProductTesting,searchProducts}=require("../controllers/index")
router.get("/",getProducts)

router.get("/testing",getProductTesting)
router.get("/search", searchProducts);


module.exports=router

