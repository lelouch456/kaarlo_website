const express=require('express');
const router=express.router();

router.get('/',(req,res)=>{
    res.json({message:'This is home page It will be connected to react element'});
});

module.exports=router;