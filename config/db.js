const mongoose = require('mongoose')
const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect('mongodb://127.0.0.1:27017/contact',{
            useNewUrlParser:true,
            useUnifiedTopology:true,
         
        })
        console.log('Connected')
    }
    catch(error){
        console.log(error)
    }
}

module.exports= connectDB