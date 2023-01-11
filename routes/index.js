const express= require('express')
const user = require('../controllers/userDetails');
const router = express.Router();
router.get('/',(req,res)=>{
    res.render('index')
})

router.post('/contact',user.getData)
module.exports=router