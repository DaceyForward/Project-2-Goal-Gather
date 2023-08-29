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
    // },
    // desc: {
    //     type: String,
    //     required: true
    // },
    // owner: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
    // },
    // objectives: [objectiveSchema]
}, { 
    timestamps: true 
})


const Subject = model('Subject', subjectSchema)

// ------- EXPORT THE MODEL ------- \\

module.exports = Subject

// List of subjects: 