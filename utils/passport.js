// ------- IMPORT PASSPORT MODULE ------- \\

const passport = require('passport');
const User = require('../models/user');

// ------- DEFINE PASSPORT OAUTH STRATEGY ------- \\

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// ------- IMPLEMENT GOOGLE STRATEGY ------- \\

passport.use(new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK
    },
    async function(accessToken, refreshToken, profile, cb) {
        try {
            let user = await User.findOne({ googleId: profile.id})
            if (user) return cb(null, user)
            user = await User.create({
                name: profile.displayName,
                googleId: profile.id,
                email: profile.emails[0].value,
                avatar: profile.photos[0].value
            })
            return cb(null, user)
        } catch (err) {
            return cb(err)
        }
    }
))

// ------- SERIALIZE METHOD ------- \\

passport.serializeUser(function(user, cb) {
    cb(null, user._id)
})

// ------- DESERIALIZE METHOD ------- \\

passport.deserializeUser(async function(userId, cb) {
    cb(null, await User.findById(userId))
})