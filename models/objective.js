// ------- SCHEMA & MODEL FOR OBJECTIVE RESOURCE ------- \\

const mongoose = require('../utils/connection')

const { Schema } = mongoose

// OBJECTIVE SCHEMA
const objectiveSchema = new Schema({
    desc: {
        type: String,
        required: true, 
        //default: 'test'
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})

module.exports = objectiveSchema