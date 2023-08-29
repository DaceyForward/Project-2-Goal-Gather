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
    .on('open', () => console.log('mongoose connected'))
    .on('close', () => console.log('mongoose disconnected'))
    .on('error', (err) => console.log('mongoose error\n', err))

// ------- EXPORT CONNECTION ------- \\
module.exports = mongoose