const express = require('express');
const router = express.Router();

router.get('/tests',(req,res)=>{
    res.send('In articles');
})

module.exports = router