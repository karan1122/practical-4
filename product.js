const express = require("express");
const router = express.Router();
router.use(express.json());
const prod = require("../productdetail")
router.get("/",(req,res)=> res.send("Product page"));

router.post("/addproduct",(req,res)=> {

 const productlist = req.body;
 const prolist = prod;
 prolist.push(productlist)
 res.json({data:prolist});
});
router.post("/fetch",(req,res)=> {

    
    res.json({data:prod});
   });
   router.post("/dlt",(req,res)=> {
   
    const dltdata = req.body;
    prod.pop(dltdata);
    
    res.json({data:prod});
   });  

   router.post("/updateproduct",(req,res)=> {

    const productlist = req.body;
    
    prod[1]=productlist;
    res.json({data:prod});
   });

module.exports = router;