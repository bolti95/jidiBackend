const router = require("express").Router();
const bodyParser = require('body-parser');
const functions = require('../lib/connection');


router.get('/', async (req, res) => {
    console.log(req.sessionID)
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
    
//         if (await sql.query. /// .checkDups(userName, email)) {
//             res.send('signup', ({info:'A user with this email or phone number already exists'}));
//             return;
//         }
    
//         let hashedpassword = await sql.query.////.hashPassword(password);
    
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


//when user signs up, works for login too, 
//search for a user in database with req.sessionID,
//and on the user generate userID and set that userID onto user, if a user is found. 
//So user matches up to their own session
//could use nano id to generate a user ID, set on user in the database
//
//when user goes to login,
//user carries session ID with them. 
//the way of authenticating route, if the session ID the user is carrying, if the doc in the database 
//has a userID, you can let them access a route (e.g. user profile)

//select sessionID from [sessions table]
//if document has a userID, not null, then authenticated user 
