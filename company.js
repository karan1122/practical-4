const express = require("express");
const router = express.Router();
router.use(express.json());
const prod = require("../companydetail.js")
router.get("/",(req,res)=> res.send("company page"));

router.post("/addcmp",(req,res)=> {

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

   router.post("/updatecmp",(req,res)=> {

    const productlist = req.body;
    
    prod[1]=productlist;
    res.json({data:prod});
   });

module.exports = router;