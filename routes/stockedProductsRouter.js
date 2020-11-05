const router = require("express").Router();
const routeController = require('../controllers/connectionController')


router.patch('/decrease', routeController.decreaseStockedProducts)

module.exports = router
