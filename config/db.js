const mongoose = require('mongoose')
const dotenv =require('dotenv')
dotenv.config({ path: "./config/config.env" });
const env = process.env.MONGO_URI
const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(env,{
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