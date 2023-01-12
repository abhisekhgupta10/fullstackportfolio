const express= require('express')
const user = require('../controllers/userDetails');

const router = express.Router();
router.get('/',(req,res)=>{
    // const request = require('request');
    // request('https://api.openweathermap.org/data/2.5/weather?q=tulsipur&appid=08db2d8dd768dc49371df1ce694ce160&units=metric', function (error, response, body) {
    //  if(response.statusCode===200){
    //     const data = JSON.parse(body)
    //     const temperature=data.main.temp
        res.render('index')
   
   

    
})



router.post('/contact',user.getData)
module.exports=router