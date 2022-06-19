const mongoose = require("mongoose");

mongoose.connect('mongodb://' + process.env.DB_HOST + '/' + process.env.DB_NAME, { useNewUrlParser: true, useUnifiedTopology: true });
const Actions = {
    contactNr: String,
    contact:String,
    visit: String,
    textarea:String,
    startDate:String
};

const schema = mongoose.Schema({
    company: String,
    name: String,
    nip: Number,
    adress: {
        city: {
            type: String,
            default: ''
        },

        street: {
            type: String,
            default: ''
        },

        nr: {
            type: String,
            default: ''
        },

        zipcode: {
            type: String,
            default: ''
        }
    },
    actions: [Actions]

});

module.exports = mongoose.model('Client', schema)