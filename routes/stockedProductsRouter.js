const router = require("express").Router();
const routeController = require('../controllers/connectionController')


router.patch('/decrease', routeController.decreaseStockedProducts)
router.patch('/increase', routeController.increaseStockedProducts)

module.exports = router
