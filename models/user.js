// ------- SCHEMA & MODEL FOR USER RESOURCE ------- \\

const mongoose = require('../utils/connection')

const { Schema, model } = mongoose

// USER SCHEMA
const userSchema = new Schema({
    name: String,
    googleId: {
        type: String,
        required: true
    },
    email: String,
    avatar: String
}, { 
    timestamps: true 
})

const User = model('User', userSchema)

// ------- EXPORT MODEL ------- \\

module.exports = User