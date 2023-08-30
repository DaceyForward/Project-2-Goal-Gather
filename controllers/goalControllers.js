// ------- IMPORT DEPENDENCIES ------- \\

const express = require('express')
require('dotenv').config()

const Goal = require('../models/goal')
const checkLogin = require('../utils/ensureLoggedIn')

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

router.post('/', checkLogin, (req, res) => { 
    // need to assign owner
    req.body.owner = req.user._id

    console.log(req.body)
    Goal.create(req.body)
        .then(goal => {
            res.redirect(`/goals/${goal._id}`)
        })
        .catch(err => {
            console.log(err)
            res.redirect('/goals/new')
        })
    })

// UPDATE
// DELETE

// NEW

router.get('/new', checkLogin, (req, res) => { 
    console.log('This is where you can add a new goal.')
    res.render('goals/new', { title: 'Add a New Goal'})
})

// EDIT

router.get('/edit/:id', checkLogin, (req, res) => { 
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

            // res.render("goals/show", { goal, title:`${goal.desc}`})
            res.render("goals/show", { goal, title: 'Goal:'})
        })
        .catch(error => console.error)

    // Objective.findById(req.params.id)
    //     .then(objective => {
    //         console.log('Here is one obj', objective)

    //         // res.render("goals/show", { goal, title:`${goal.desc}`})
    //         res.render("goals/show", { objective, title: 'Objectives:'})
    //     })
    //     .catch(error => console.error)
    
})

// ------- EXPORT ROUTER ------- \\

module.exports = router