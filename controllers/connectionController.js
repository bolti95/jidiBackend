const functions = require('../lib/connection')


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

//a controller is something that seperates functionality of routes into spereate files
//controllers could be all of the functionality if router gets too long 
//groups of routes and groups of controllers]
//everything for checkout has seperate controllers
//everything for each component will have it's own controller
