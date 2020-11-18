const router = require("express").Router();
const bodyParser = require('body-parser');
const functions = require('../lib/connection');
const session = require('express-session');
const MSSQLStore = require('connect-mssql')(session);
const nanoid = require('nanoid');





router.get('/', async (req, res) => {
    res.send('Login page');
});


router.post('/login', async (req, res) => {
    let {email, password} = req.body;
    if (!await functions.checkExists(email)) {
        res.send({err:'a user with this email doesn\'t exist'});
        return;
    }
    if (await functions.comparePassword(email, password)) {
        // user can login in if true, other wrong
        req.session.userID = nanoid();
        res.redirect('/profile');
        return;
    }
    res.send({err:'You have entered the wrong password or email. Please fill out all the fields correctly.'});
});


router.get('/login', (req, res) => {
    res.render('index');
})

router.get('/profile', functions.checkSignedIn, (req, res) => {
    res.render('profile')
})

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
})


module.exports = router;



