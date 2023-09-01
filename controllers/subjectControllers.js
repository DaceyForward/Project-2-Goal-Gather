// ------- IMPORT DEPENDENCIES ------- \\

const express = require('express')
require('dotenv').config()

const Subject = require('../models/subject')
//const checkLogin = require('../utils/ensureLoggedIn')

const router = express.Router()

// ------- ROUTES & CONTROLLERS ------- \\
// INDEX

router.get('/index', (req, res) => {
    // res.render('subjects/index')
    
    Subject.find({})
        .then(subjects => {
            console.log('These are the subs', subjects)

            res.render('subjects/index', { subjects })
        })
        .catch(error => console.error)
})

module.exports = router