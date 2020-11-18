const router = require("express").Router();
const bodyParser = require('body-parser');
const functions = require('../lib/connection');

const bcrypt = require('bcrypt');
const {nanoid} = require('nanoid');




router.get('/', async (req, res) => {
    res.send('Sign up page');
});



router.post('/create', async (req, res) => {
    console.log('hello')
       const {name, userName, email, userPassword} = req.body
       console.log(req.sessionID)
        // console.log(req.body)
        if (!name || !userName || !email || !userPassword) {
            res.send({info:'Please fill out all fields correctly.'});
            return;
         }
    
        if (await functions.checkIfDuplicate(userName, email)) {
            res.send({info:'A user with this email or phone number already exists'});
            return;
        }
    
        let hashedpassword = await functions.hashPassword(userPassword);

        functions.createUser({name, userName, email, userPassword: hashedpassword}); 
    
        // functions.createSession({sessionID: req.sessionID})
        let users={
            email: req.body.email,
            password: hashedpassword
        }
    
        res.send({message: 'User created', newUser: name, userName, email, userPassword})
       
    });


module.exports = router;
