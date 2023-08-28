// ------- IMPORT DEPENDENCIES ------- \\

const express = require('express')
require('dotenv').config()
const path = require('path')
const middleware = require('./utils/middleware')

// ------- ROUTERS & CONTROLLERS ------- \\

const AuthRouter = require('./controllers/authControllers')
const GoalRouter = require('./controllers/goalControllers')
const ObjectiveRouter = require('./controllers/objectiveControllers')

const app = express()

// ------- VIEW ENGINE ------- \\

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// ------- MIDDLEWARE ------- \\

middleware(app)

// ------- ROUTES ------- \\

app.get('/', (req, res) => {
    res.redirect('/')
})

app.use('/', AuthRouter)
app.use('/fruits', GoalRouter)
app.use('/comments', ObjectiveRouter)

// ------- SERVER LISTENER ------- \\

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log('GOAL GATHER IS RUNNING!')
})
