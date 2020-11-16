const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); //using dotenv to run server

const checkout = require('./routes/checkoutRouter');
// const stockedProducts = require('./routes/stockedProductsRouter')
const signup = require('./routes/signupRouter');
const login = require('./routes/loginRouter');

const sql = require('mssql')


const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// app.use('/' , routes);
// app.use('/basket' , basket);
app.use('/checkout', checkout);
// app.use('/stockedProducts', stockedProducts)
app.use('/signup/', signup)
app.use('/login/', login)




app.listen(process.env.PORT || 3005, () => {
    console.log ('Server is running on port 3005')
})


