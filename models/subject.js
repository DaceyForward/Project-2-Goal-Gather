// ------- SCHEMA & MODEL FOR SUBJECT RESOURCE ------- \\

const mongoose = require('../utils/connection')

//const objectiveSchema = require('./objective')

const { Schema, model } = mongoose

// SUBJECT SCHEMA
const subjectSchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, { 
    timestamps: true 
})


const Subject = model('Subject', subjectSchema)

// ------- EXPORT THE MODEL ------- \\

module.exports = Subject

// List of subjects: 