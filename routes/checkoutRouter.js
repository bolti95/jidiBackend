const router = require("express").Router();
const bodyParser = require('body-parser');
const functions = require('../lib/connection');


router.get('/', async (req, res) => {
    res.send('Checkout page');
});

router.get('/create', async (req, res) => {
    res.send('Checkout page');
});

router.post('/create', async (req, res) => {
    let {customerName, Items, SaleAmount, email, cardNumber} = req.body

    let customerOrder = ({
        customerName,
        Items, 
        SaleAmount,
        email,
        cardNumber      
    }) 
    res.send('Order created', req.body)
    console.log(req.body)
    //if statement: if the data is there, create order number, if it's not, create error
});

router.delete('/delete', async(req, res) => {
    res.send('Order now deleted')
})

module.exports = router;