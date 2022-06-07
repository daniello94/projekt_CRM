
const mongoose = require("mongoose");



mongoose.connect('mongodb://' + process.env.DB_HOST + '/' + process.env.DB_NAME, { useNewUrlParser: true, useUnifiedTopology: true });


const schema =  mongoose.Schema({
    company: String,
    name:String,
    nip:Number,
    adress: {
        city: String,
        street: String,
        nr: String,
        zipcode: String
    },
    actions:[{
        phone:Number,
        visit:String
    }]
    
})
module.exports = mongoose.model('Client', schema)