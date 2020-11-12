
const routes = require("express").Router();

// const routeController = require('../controllers/connectionController')


routes.get('/', (req, res) => {
    res.send('Home Page');
});



module.exports = routes;
