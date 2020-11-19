const sql = require('mssql');
const bcrypt = require('bcrypt');


const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    server: process.env.DB_SERVER,
    database: process.env.DB_Database,
    // port: process.env.DB_PORT,
    }

// const connection = async () => {
//     await sql.connect('mssql://DB_USER:DB_PASS@DB_Database/TechStore', {
//         enableArithAbort: true
//     })
// }
const connect = async () => {
    await sql.connect(config);

    // let data = await sql.query `SELECT * FROM StockedProducts`;
    // console.log(data);
}

connect();






const createCustomerOrders = async(data) => {
    //data is = to req.body. Can be called whatever you like

    let result 
    try {
        console.log(data);

        result = await sql.query `INSERT INTO CustomerOrders VALUES(${data.orderNumber}, ${data.customerName},  ${data.email}, ${data.cardNumber}, ${data.expiryDate}, ${data.cvc}, ${data.items}, ${data.saleAmount} )`

        // ${ID}, ${CustomerName}, ${Items}, ${SaleAmount}
    } catch(error) {
        console.log(error);
        }
        return result
}


const updateStockedProducts = async (data) => {

    //data = one object that represents a single product 
    //get a userset up and store the basket in the user session / logged in user 


    await connect()
    let result1
    let result2
    let result3
    let result4
    let result5

    try { 
        console.log(data)
        const result1 = await sql.query `UPDATE StockedProducts SET Quantity = Quantity - ${data.desktop} WHERE ID = 1`
        const result2 = await sql.query `UPDATE StockedProducts SET Quantity = Quantity - ${data.laptop} WHERE ID = 2`
        const result3 = await sql.query `UPDATE StockedProducts SET Quantity = Quantity - ${data.iphone} WHERE ID = 3`
        const result4 = await sql.query `UPDATE StockedProducts SET Quantity = Quantity - ${data.phonecase} WHERE ID = 4`
        const result5 = await sql.query `UPDATE StockedProducts SET Quantity = Quantity - ${data.fitbit} WHERE ID = 5`
        // console.log(result)
    } catch (error) {
        console.log(error)
    }
}


const createUser = async (data) => {

    let result;
    try {
        result = await sql.query `INSERT INTO Users VALUES(${data.name}, ${data.userName}, ${data.email}, ${data.userPassword})`

    } catch (error) {
        console.log('error');
    }
    return result;
}



const hashPassword = async (data) => {
    let hash = await bcrypt.hash(data, 12);

    return hash;
}


const checkIfDuplicate = async (userName, email) => {
    let result;
     await connect();
    result = await sql.query `SELECT * FROM Users WHERE email = ${email} OR userName = ${userName}`
    console.log(result.recordset);
    if (result.recordset.length === 0) {
        return false;
    }

    return true;
}



const checkExists = async (userName) => {
    let result;    
    result = await sql.query `SELECT * FROM Users WHERE userName = ${userName}`
    console.log(result.recordset);
    if (result.recordset.length === 0) {
        return false;
    }
    return true;
}

const comparePassword = async (userPassword) => {
    let result;
    result = await sql.query `SELECT * FROM Users WHERE userPassword = ${userPassword}`
    console.log(result.recordset);
    if (result.recordset.length === 0) {
        return false;
    } 
    return true;
}


// isAuthorised 
// look for session ID in the cookies table, if the sessionID exsists then login
// set isAuthed = true
// result = await sql.query `UPDATE Users SET ${sessionID}`
const isAuthorised = async (req) => {
    // sessionID, userName, sessionCookie, expires, isAuthed
    // console.log(userName)
    // let result;
    let sessionID = req.sessionID;
    let sessionCookie = req.Session.cookie;
    let expires = req.Session.cookie._expires;
    let isAuthed = 1;
    let userName = req.body.userName

    let result;
    let sid = sessionID;
    let session = sessionCookie;
    console.log('this is ' + userName)
    // let isAuthed = 1;

    try {
        // result = await sql.query `UPDATE [dbo].[sessions] SET isAuthed = 1, WHERE sid = ${sessionID}`; 
        // // result1 = await sql.query `UPDATE [dbo].[sessions] SET userID = ${userName}, ${sessionCookie}, WHERE sid = ${sessionID}`
        result = await sql.query `INSERT INTO [dbo].[sessions] VALUES(${sid}, ${session}, ${expires}, ${isAuthed}, ${userName})`
    console.log(result1)
    } catch (error) {
        console.log('error');
    }
    return result;
}
// comparePassword
// WHERE userName = userName, check password


module.exports = {
    createCustomerOrders,
    updateStockedProducts,
    createUser,
    hashPassword,
    checkIfDuplicate,
    checkExists,
    comparePassword,
    isAuthorised

}

