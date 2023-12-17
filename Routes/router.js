const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/products',(req,res,next)=>{
    res.status(200).json({
        message:'this is get'
    })
})
router.get('/prod',(req,res,next)=>{
    res.writeHead(200,{'Content-Type': 'text/html'})
    res.write('This is get method excuted from /prod');
})

router.get('/htmldata', (req,res,next)=>{
    fs.readFile('././index.html',(err, data)=>{
        if(err){
            res.status(404).json({
                message:'There is an error'
            })
        } else{
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
        }
    })
})
module.exports = router;