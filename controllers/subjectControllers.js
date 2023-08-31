// ------- IMPORT DEPENDENCIES ------- \\

const express = require('express')
require('dotenv').config()

const Goal = require('../models/goal')
const checkLogin = require('../utils/ensureLoggedIn')

const router = express.Router()

// ------- ROUTES & CONTROLLERS ------- \\
// INDEX

router.get('/', (req, res) => {
    // res.render('subjects/index')
    
    Subject.find({})
        .then(subjects => {
            console.log('These are the subs', subjects)

            res.render('subjects/index', { subjects })
        })
        .catch(error => console.error)
})