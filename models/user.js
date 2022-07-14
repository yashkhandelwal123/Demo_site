const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
        // unique : true
    },
    name : {
        type : String,
        required : true,
        // unique : true
    }
} ,{
  timestamps: true
});

const user = mongoose.model('user' , userSchema);
console.log(`connected to database`)

module.exports = user;