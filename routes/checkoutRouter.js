const router = require("express").Router();
const orderid = require('order-id')('mysecret');
const bodyParser = require('body-parser');
const functions = require('../lib/connection')

router.get('/', async (req, res) => {
    res.send('Checkout page');
});


router.post('/create', async (req, res) => {
    console.log('hello')
        // let {customerName, email, cardNumber, expiryDate, cvc} = req.body 
 
        const orderNumber = orderid.generate();
        req.body.orderNumber = orderNumber;
       
       
        functions.createCustomerOrders(req.body) 

        
        

        // console.log(req.body)
        res.send({message: 'Order created', orderNumber: orderNumber})
       
    });


router.put('/updateStockedProducts', async(req, res) => {

    const {desktop, laptop, iphone, phonecase, fitbit} = req.body

    functions.updateStockedProducts({desktop, laptop, iphone, phonecase, fitbit}) 


    res.send({updateProducts: 'Quantities updated'})

})


router.delete('/delete', async(req, res) => {
    req.body.orderNumber = orderNumber;
    functions.deleteCustomerOrders(orderNumber)
    res.send('Customer has been deleted')
    res.send('Order now deleted')
})

module.exports = router;
