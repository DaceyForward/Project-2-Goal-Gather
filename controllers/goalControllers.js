// ------- IMPORT DEPENDENCIES ------- \\

const express = require('express')
require('dotenv').config()

const Goal = require('../models/goal')
//const checkLogin = require('../utils/ensureLoggedIn')

const router = express.Router()

// ------- ROUTES & CONTROLLERS ------- \\
// INDEX

router.get('/', (req, res) => {
    Goal.find({})
        .then(goals => {
            console.log('These are the goals', goals)

            res.render('goals/index', { goals, title: 'All Goals' })
        })
        .catch(error => console.error)
})

// CREATE
// UPDATE
// DELETE

// NEW

router.get('/new', (req, res) => { //add checkLogin, back in
    console.log('This is where you can add a new goal.')
    res.render('goals/new', { title: 'Add a New Goal'})
})

// EDIT

router.get('/edit/:id', (req, res) => { //add checkLogin, back in
    Goal.findById(req.params.id)
        .then(goal => {
            console.log('Here is one goal to edit', goal)

            res.render('goals/edit', { goal, title: `Edit this Goal: ${goal.desc}`})
        })
        .catch(error => console.error)
})

// SHOW

router.get('/:id', (req, res) => {
    Goal.findById(req.params.id)
        .then(goal => {
            console.log('Here is one goal', goal)

            res.render("goals/show", { goal, title:`${goal.desc}`})
        })
        .catch(error => console.error)
})

// ------- EXPORT ROUTER ------- \\

module.exports = router