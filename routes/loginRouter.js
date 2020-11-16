const router = require("express").Router();
const bodyParser = require('body-parser');
const functions = require('../lib/connection');


router.get('/', async (req, res) => {
    res.send('Login page');
});

module.exports = router;