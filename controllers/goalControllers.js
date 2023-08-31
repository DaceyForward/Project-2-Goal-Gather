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

router.patch('/edit/:id', checkLogin, (req, res) => {
    Goal.findById(req.params.id)
        .then(goal => {
            if (req.user && goal.owner == req.user.id) {
                return goal.updateOne(req.body)
            } else {
                res.send('something went wrong')
            }
        })
        .then(data => {
            console.log('what is returned from updateOne', data)

            res.redirect('/goals')
        })
        .catch(error => console.error)
})

// DELETE

// router.delete('/:id', checkLogin, (req, res) => {
//     Fruit.findById(req.params.id)
//         .then(fruit => {
//             if (req.user && fruit.owner == req.user.id) {
//                 return fruit.deleteOne()
//             } else {
//                 res.send('something went wrong')
//             }
//         })
//         .then(data => {
//             console.log('returned from deleteOne', data)
//             res.redirect('/fruits')
//         })
//         .catch(error => console.error)
// })

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

            res.render('goals/edit', { goal, title: 'Edit Goal'})
        })
        .catch(error => console.error)
})

// SHOW

// router.get('/:id', (req, res) => {
//     Goal.findById(req.params.id)
//         .then(goal => {
//             console.log('Here is one goal', goal)

//             // res.render("goals/show", { goal, title:`${goal.desc}`})
//             res.render("goals/show", { goal, title: 'Goal:'})
//         })
//         .catch(error => console.error)

//     // Objective.findById(req.params.id)
//     //     .then(objective => {
//     //         console.log('Here is one obj', objective)

//     //         // res.render("goals/show", { goal, title:`${goal.desc}`})
//     //         res.render("goals/show", { objective, title: 'Objectives:'})
//     //     })
//     //     .catch(error => console.error)
    
// })

router.get('/:id', (req, res) => {
    Goal.findById(req.params.id)
        .populate('owner')
        .populate('objectives.author')
        .then(goal => {
            console.log('Here is a goal', goal)
            res.render('goals/show', { goal, title: 'Goal'})
        })
        .catch(error => console.error)
})

// router.post('/goals/:id', checkLogin, (req, res) => {

//     req.body.author = req.user._id

//     Goal.findById(req.params.goalId)

//         .then(goal => {
//             goal.objectives.push(req.body)
//             res.render(goal.save())

//             // res.render(`/goals/${goal._id}/objectives`)
//         })

//         .then(goal => {
//             res.redirect(`/goals/${goal._id}`)
//         })

//         .catch(error => console.error)
// })

// ------- EXPORT ROUTER ------- \\

module.exports = router