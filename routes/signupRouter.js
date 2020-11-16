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
        res.send({message: 'Order created', user})
       
    });


module.exports = router;
