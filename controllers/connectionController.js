const functions = require('../lib/connection')




exports.postCustomerOrders = async (req, res) => {
    let {ID, CustomerName, Items, SaleAmount} = req.query
    functions.createCustomerOrders(ID, CustomerName, Items, SaleAmount )
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
