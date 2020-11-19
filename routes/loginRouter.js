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
    // const userName = req.body
    let sessionID = req.sessionID;
    let sessionCookie = req.session.cookie;
    let expires = req.session.cookie._expires;
    let data = req.body;
    let userName = req.body
    let isAuthed = 1;
    console.log(userName);
    // console.log(data);

    console.log(req.session)
    if (!await functions.checkExists(userName)) {
        res.send({err:'a user with this userName doesn\'t exist'});
        return;
    }
    // if (await functions.comparePassword(userPassword)) {
        // user can login in if true, other wrong
        // req.sessionID.isAuthed = true; 
        functions.isAuthorised(sessionID, sessionCookie, expires, userName, isAuthed)

        // req.sessionID = isAuthed 
        req.session.save();

        res.send({userLoggedIn: 'you are now logged in'});

        //hhihihoiho


        // return;

    // }
    // res.send({err:'You have entered the wrong password. Please fill out all the fields correctly.'});
    // console.log('wrong password')
});





router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
})


module.exports = router;