// ------- SCHEMA & MODEL FOR GOAL RESOURCE ------- \\

const mongoose = require('../utils/connection')

const objectiveSchema = require('./objective')

const { Schema, model } = mongoose

// GOAL SCHEMA
const goalSchema = new Schema({
    subject: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true 
        //default: 'test'
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    objectives: [objectiveSchema]
}, { 
    timestamps: true 
})


const Goal = model('Goal', goalSchema)

// ------- EXPORT THE MODEL ------- \\

module.exports = Goal