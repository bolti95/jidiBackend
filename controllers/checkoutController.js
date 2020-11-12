const functions = require('../lib/connection')

exports.createCustomerOrders = async (req, res) => {

    let {orderNumber, customerName, Items, SaleAmount, email, cardNumber, expiryDate, cvc} = req.query
    functions.createCustomerOrders(orderNumber, customerName, Items, SaleAmount, email, cardNumber, expiryDate, cvc)
    res.send('Customer order created')
    //what we need to happen when customer checks out

}
// module.exports = {
//     createCustomerOrders
// }