const functions = require('../lib/connection')


exports.postCustomerOrders = async (req, res) => {

    let {ID, customerName, email, cardNumber, expiryDate, cvc} = req.query
    functions.createCustomerOrders(ID, customerName, email, cardNumber, expiryDate, cvc)
    res.send('Customer order created')

}

exports.deleteCustomerOrders = async (req, res) => {
    let {ID} = req.query
    functions.deleteCustomerOrders(ID)
    res.send('Customer has been deleted')
}

exports.decreaseStockedProducts = async (req, res) => {
    let {ID} = req.query
     functions.decreaseStockedProducts(ID)
     res.send('Stock decreased')
    
}
