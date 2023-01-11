const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required:true
    },
   
    email:{
        type: String,
        required:true
    },
   

    contact:{
        type: Number,
        required:true
    },
   
    
    address:{
        type: String,
        required:true
    },
   
   
    message:{
        type: String,
        
    },
   
  
    date:{
        type:Date,
        default:  Date.now
      }
})

module.exports=mongoose.model('User',UserSchema)