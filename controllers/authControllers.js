const express = require('express');
const router = express.Router();
const passport = require('passport')

router.get('/home', function(req, res, next) {
    console.log('There is no place like HOME.')
    res.render('home');
  });

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
    'google',
    {
    scope: ['profile', 'email']
    }
))

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
    'google',
    {
    successRedirect: '/',
    failureRedirect: '/'
    }
))

// OAuth logout route
router.get('/logout', function(req, res) {
    req.logout(function() {
        res.redirect('/')
    })
})

module.exports = router;