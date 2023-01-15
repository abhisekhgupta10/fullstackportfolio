const express = require("express");
const request = require('request')
const user = require("../controllers/userDetails");

const router = express.Router();
router.get("/", (req, res) => {
 res.render('index')
});

router.get('/articles',(req,res)=>{
  const userAgent = req.get('user-agent')
  request('https://newsapi.org/v2/everything?q=world&apiKey=e364de34bff342df93310e304e07b708',{ headers: {
    'User-Agent': userAgent
  }},(err,request,response)=>{
    if(err){
      console.log(err)
      res.redirect('/')
    }else{
      // console.log(response)
      const body = JSON.parse(response)
      const articlesArr = body.articles
   
      res.render('articles',{
        articles:articlesArr
      })
      // res.render('index')
    }
  })
})

router.get('*',(req,res)=>{
    res.render('404')
})
router.post("/contact", user.getData);
module.exports = router;
