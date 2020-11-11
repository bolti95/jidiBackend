const router = require("express").Router();
const orderid = require('order-id')('mysecret');
const bodyParser = require('body-parser');

router.get('/', async (req, res) => {
    res.send('Checkout page');
});

router.post('/create', async (req, res) => {
        let {customerName, email, cardNumber, expiryDate, cvc} = req.body 
        const orderNumber = orderid.generate();
        
        // orderid.getTime(id)
    
       
        console.log(req.body)
        res.send({message: 'Order created', ID: orderNumber})
       
    });
    


router.delete('/delete', async(req, res) => {
    res.send('Order now deleted')
})

module.exports = router;