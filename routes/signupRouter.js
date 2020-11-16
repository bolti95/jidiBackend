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
        functions.createUser(name, userName, email, userPassword) 
        // console.log(req.body)
        if (!name || !userName || !email || !userPassword) {
            res.send('signup', ({info:'Please fill out all fields correctly.'}));
            return;
         }
    
        if (await functions.checkIfDuplicate(userName, email)) {
            res.send('signup', ({info:'A user with this email or phone number already exists'}));
            return;
        }
    
        let hashedpassword = await functions.hashPassword(userPassword);
    
        // let user = ({
        //     name,
        //     userName,
        //     email,
        //     userPassword: hashedpassword
        // })
    
        user.save();

        req.session.userID = nanoid();
        req.session.save();
    
        res.send({message: 'User created', newUser: name, userName, email, userPassword})
       
    });


module.exports = router;
