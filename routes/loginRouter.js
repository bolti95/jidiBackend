const router = require("express").Router();
const bodyParser = require('body-parser');
const functions = require('../lib/connection');
const session = require('express-session');;

router.get('/', async (req, res) => {
    res.send('Login page');
});

router.get('/authorised', async (req, res) => {
    res.send('hello');
})


router.post('/authorised', async (req, res) => {
    let {userName, userPassword} = req.body;
    let sessionID = req.sessionID
    if (!await functions.checkExists(userName)) {
        res.send({err:'a user with this userName doesn\'t exist'});
        return;
    }
    if (await functions.comparePassword(userPassword)) {
        // user can login in if true, other wrong
        // req.sessionID.isAuthed = true; 
        functions.isAuthorised(sessionID)

        // req.sessionID = isAuthed 
        req.session.save();

        res.send({userLoggedIn: 'you are now logged in'});

        //hhihihoiho

        return;

    }
    res.send({err:'You have entered the wrong password. Please fill out all the fields correctly.'});

});




// router.get('/profile',  (req, res) => { 
//     // checkSignedIn,
//     res.send('profile')
// })


router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
})


module.exports = router;