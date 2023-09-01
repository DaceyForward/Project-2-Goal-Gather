// ------- IMPORT DEPENDENCIES ------- \\

const express = require('express')
require('dotenv').config()

const Goal = require('../models/goal')
const checkLogin = require('../utils/ensureLoggedIn')

const router = express.Router()

// ------- ROUTES & CONTROLLERS ------- \\

// CREATE

router.post('/goals/:id', checkLogin, (req, res) => {
    
    req.body.author = req.user._id

    
    Goal.findById(req.params.id)

        .then(goal => {
            
            goal.objectives.push(req.body)
            console.log('inside the create obj function', goal)
            //res.render(goal.save())
                return goal.save()
        })

        .then(goal => {
            res.redirect(`/goals/${goal._id}`)
        })

        .catch(error => console.error)
})

// EDIT

router.get('/edit/:id', checkLogin, (req, res) => {
    res.send('This is where the objective form is.')
})

// UPDATE

router.patch('/:id', checkLogin, (req, res) => {
    res.send('This is the route to edit objectives.')
})

// DELETE

router.delete('/:goalId/:objectiveId', checkLogin, (req, res) => {
    const gId = req.params.goalId
    const oId = req.params.objectiveId
    // find the fruit
    Goal.findById(gId)
        .then(goal => {
            // isolate the comment
            const theObj = goal.objectives.id(oId)
            // check for ownership
            if (req.user && theObj.author == req.user.id) {
                // run a document method to remove the comment(could also use .remove())
                theObj.deleteOne()
                // save the parent model
                return goal.save()
            } else {
                res.send('something went wrong')
            }
        })
        .then(goal => {
            // redirect to the show page
            res.redirect(`/goals/${goal._id}`)
        })
        .catch(error => console.error)
})

// router.delete('/goals/:id', checkLogin, (req, res) => {
//     // const gId = req.params.goalId
//     //const oId = req.params.objectiveId

//     Goal.findById(req.params.id)
//         .then(goal => {

//             const theObj = goal.objectives.findById(req.params.id)
 
//             if (req.user && theObj.author == req.user.id) {

//                 theObj.deleteOne()

//                 return goal.save()

//             } else {
//                 res.send('something went wrong')
//             }
//         })
//         .then(goal => {
//             // redirect to the show page
//             res.redirect(`/goals/${goal._id}`)
//         })
//         .catch(error => console.error)
// })

// router.delete('/goals/:id', checkLogin, (req, res) => {
    
//     req.body.author = req.user._id

    
//     Goal.findById(req.params.id)

//         .then(goal => {
            
//             goal.objectives.deleteOne()
//             // console.log('inside the create obj function', goal)
//             //res.render(goal.save())
//                 return goal.save()
//         })

//         .then(goal => {
//             res.redirect(`/goals/${goal._id}`)
//         })

//         .catch(error => console.error)
// })

// SHOW
router.get('/goals/:id', checkLogin, (req, res) => {
    console.log('show me the objectives')

})

// ------- EXPORT ROUTER ------- \\

module.exports = router