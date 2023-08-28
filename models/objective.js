// ------- SCHEMA & MODEL FOR OBJECTIVE RESOURCE ------- \\

const mongoose = require('../utils/connection')

const { Schema } = mongoose

// OBJECTIVE SCHEMA
const objectiveSchema = new Schema({
    strategy: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }, 
    focusArea: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = objectiveSchema