const router = require("express").Router();
const bodyParser = require('body-parser');
const functions = require('../lib/connection');


router.get('/', async (req, res) => {
    res.send('Sign up page');
});


router.post('/create', async (req, res) => {
    console.log('hello')
       const {userName, email, password} = req.body
        functions.createUser(req.body) 
        // console.log(req.body)
        if (!userName || !email || !password) {
            res.render('signup', ({info:'Please fill out all fields correctly.'}));
            return;
         }
    
        if (await UserModel.checkDups(userName, email)) {
            res.render('signup', ({info:'A user with this email or phone number already exists'}));
            return;
        }
    
        let hashedpassword = await UserModel.hashPassword(password);
    
        // let user = new UserModel({
        //     name,
        //     email,
        //     age,
        //     phoneNumber,
        //     password: hashedpassword
        // })
    
        user.save();
    
        res.send({message: 'Order created', user})
       
    });


module.exports = router;
