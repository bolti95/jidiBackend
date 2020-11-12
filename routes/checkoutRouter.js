const router = require("express").Router();

const orderid = require('order-id')('mysecret');
const bodyParser = require('body-parser');

const functions = require('../lib/connection')


router.get('/', async (req, res) => {
    res.send('Checkout page');
});


router.post('/create', async (req, res) => {

        let {customerName, email, cardNumber, expiryDate, cvc} = req.body 
 
        const orderNumber = orderid.generate();
        
        // orderid.getTime(id)
        // functions.createCustomerOrders   
        functions.createCustomerOrders({orderNumber, customerName, email, cardNumber, expiryDate, cvc}) 
        

        console.log(req.body)
        res.send({message: 'Order created', orderNumber: orderNumber})
       
    });
    
    // const router = require("express").Router();
    // const routeController = require('../controllers/connectionController')
    
    
    // router.post('/create', )
    // router.delete('/delete', routeController.deleteCustomerOrders)
    


    

router.delete('/delete', async(req, res) => {
    res.send('Order now deleted')
})

module.exports = router;