const router = require("express").Router();
const bodyParser = require('body-parser');
const functions = require('../lib/connection');

const bcrypt = require('bcrypt');
const {nanoid} = require('nanoid');
const sql = require('mssql');


// const config = {
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     server: process.env.DB_HOST,
//     database: process.env.DB_Database,
//     port: process.env.DB_PORT,

//     }


//     const connection = async () => {
//     sql.connect(config, function (err) {
//         enableArithAbort: true
//         })
//     }

//     connection();




router.get('/', async (req, res) => {
    res.send('Sign up page');
});



router.post('/create', async (req, res) => {
    console.log(req.sessionID)
       const {name, userName, email, userPassword} = req.body
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

        // generate session ID

        res.send({message: 'User created', newUser: name, userName, email, userPassword})
       
    });


module.exports = router;
