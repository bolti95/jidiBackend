
const routes = require("express").Router();

const routeController = require('../controllers/connectionController')
const checkoutController = require('../controllers/checkoutController')

routes.get('/', (req, res) => {
    res.send('Home Page');
});

routes.post('/create', checkoutController.createCustomerOrders)

module.exports = routes;
