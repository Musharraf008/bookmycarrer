const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    gender: String,
    age: Number,
    phone: {
        type: Number,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
    }
})

const userDB = mongoose.model('userdb', userSchema)

module.exports = userDB;
