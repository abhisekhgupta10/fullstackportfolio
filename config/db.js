const mongoose = require('mongoose')
const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect('mongodb+srv://Abhisekh_:Mah%40dev10@cluster0.jdw7xdp.mongodb.net/Contact',{
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