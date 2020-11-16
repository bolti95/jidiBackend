const router = require("express").Router();
const bodyParser = require('body-parser');
const functions = require('../lib/connection');


router.get('/', async (req, res) => {
    res.send('Sign up page');
});


// router.post('/create', async (req, res) => {
//     console.log('hello')
//        const {name, userName, email, userPassword} = req.body
//         functions.createUser(req.body) 
//         // console.log(req.body)
//         if (!name || !userName || !email || !userPassword) {
//             res.send('signup', ({info:'Please fill out all fields correctly.'}));
//             return;
//          }
    
//         if (await UserModel.checkDups(userName, email)) {
//             res.send('signup', ({info:'A user with this email or phone number already exists'}));
//             return;
//         }
    
//         let hashedpassword = await UserModel.hashPassword(password);
    
//         // let user = new UserModel({
//         //     name,
//                userName,
//         //     email,
//         //     userPassword: hashedpassword
//         // })
    
//         user.save();
    
//         res.send({message: 'User created', user})
       
//     });


module.exports = router;
