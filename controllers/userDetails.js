const user = require('../models/User')

const getData = async (req,res)=>{
    try {
      const viewers = new user({
            fullName: req.body.fullName,
            email: req.body.email,
            contact: req.body.contact,
            address: req.body.address,
            message: req.body.message
        })
        const result = await viewers.save();
        res.redirect('index');
    } catch (error) {
        res.send(error.message)
    }
}

module.exports= {
    getData
}