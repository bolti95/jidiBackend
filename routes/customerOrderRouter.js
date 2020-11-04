const router = require("express").Router();
const routeController = require('../controllers/connectionController')


router.post('/create', routeController.postCustomerOrders)
router.delete('/delete', routeController.deleteCustomerOrders)


module.exports = router