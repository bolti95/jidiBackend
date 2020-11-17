const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); //using dotenv to run server
const session = require('express-session');
const checkout = require('./routes/checkoutRouter');
const signup = require('./routes/signupRouter');
const login = require('./routes/loginRouter');
const MSSQLStore = require('connect-mssql')(session);
const sql = require('mssql');


const app = express();

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    server: process.env.DB_HOST,
    database: process.env.DB_Database,
    port: process.env.DB_PORT,

    }

    const connection = async () => {
        sql.connect(config, function (err) {
            enableArithAbort: true
            })
        }
    
        connection();
    


// connection();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// app.use('/' , routes);
// app.use('/basket' , basket);

app.use(session({
    store: new MSSQLStore(config, {ttl: 1000 * 60 * 60 * 24, autoRemove: 'interval'}),
    secret: 'supersecret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,//process.env.in_PROD
        sameSite: true,
        maxAge: 1000 * 60 * 60 * 2 // 2 hours
    }
//     //put this in env var
}))
// app.use('/stockedProducts', stockedProducts)

app.use('/checkout', checkout);
app.use('/signup', signup)
app.use('/login', login)




app.listen(process.env.PORT || 3005, () => {
    console.log ('Server is running on port 3005')
})


