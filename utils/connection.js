// ------- IMPORT DEPENDENCIES ------- \\

require('dotenv').config()
const mongoose = require('mongoose')

// ------- DB CONNECTION ------- \\

const DATABASE_URL = process.env.DATABASE_URL

const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(DATABASE_URL, CONFIG)

mongoose.connection
    .on('open', () => console.log('Mongoose is connected.'))
    .on('close', () => console.log('Mongoose is disconnected.'))
    .on('error', (err) => console.log('Mongoose error\n', err))

// ------- EXPORT CONNECTION ------- \\
module.exports = mongoose