const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); //using dotenv to run server

const routes = require('./routes/router');
// const basket = require('./routes/basketRouter');  being created
const checkout = require('./routes/checkoutRouter');
const customerOrder = require('./routes/customerOrderRouter')
const stockedProducts = require('./routes/stockedProductsRouter')


const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use('/' , routes);
// app.use('/basket' , basket);
app.use('/checkout', checkout);
app.use('/customerOrder', customerOrder)
app.use('/stockedProducts', stockedProducts)
// app.listen(process.env.PORT, () => {
//     console.log(`Server is running on port ${process.env.PORT}`)
// })


app.listen(process.env.PORT || 3005, () => {
    console.log ('Server is running on port 3005')
})
