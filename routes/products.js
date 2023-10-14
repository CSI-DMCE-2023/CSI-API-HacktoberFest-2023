const express = require("express");
const router = express.Router();
const Products = require("../Products.json");

router.get("/", async(req, res) => {
  try{

    // const {minPrice,maxPrice}=req.body
    let minPrice=req.query.minPrice
    let maxPrice=req.query.maxPrice
    let ans=[]
    for(let i=0;i<Products.length; i++){
      if(minPrice < Products[i].price && Products[i].price < maxPrice ){
        ans.push(Products[i]);
      }
    }
    res.status(200).json({
      message:`All product are here bt ${minPrice}  `,
      success:true,
      ans,
    })
  }
  catch(error){
    res.status(400).json({
      message:"something error in finding the product bt these price",
      success:false,
      error:error.message,
    })
  }
});

module.exports = router;
