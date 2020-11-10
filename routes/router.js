
const routes = require("express").Router();

const routeController = require('../controllers/connectionController')

routes.get('/', (req, res) => {
    res.send('Home Page');
});

routes.post('/create', routeController.postCustomerOrders)

module.exports = routes;
