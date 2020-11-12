const sql = require('mssql');
const env = require('dotenv');
const config = env.JIDIBACKEND_CONNECTION
let dbConnect = new sql.ConnectionPool(config);


// sql.connect(config, function (err) {

//     if (err) console.log(err);

//     let request = new sql.Request();

// })

const connection = async () => {
    await sql.connect('mssql://sa:Password1@localhost,1433/TechStore',{
        enableArithAbort: true
    })
}



const createCustomerOrders = async(orderNumber, customerName, email, cardNumber, expiryDate, cvc, Items, SaleAmount) => {
    await connection()
    let result 
    try {

        result = await sql.query `INSERT INTO CustomerOrders VALUES(${orderNumber}, ${customerName}, ${Items}, ${SaleAmount},  ${email}, ${cardNumber})`

        // ${ID}, ${CustomerName}, ${Items}, ${SaleAmount}
    } catch(error) {
        console.log(error);
        }
        return result
}

const deleteCustomerOrders = async(ID) => {
    await connection()
    try {
       const result = await sql.query `DELETE FROM customerOrders WHERE ID = 3`

       console.log(result)
    } catch(error) {
        console.log(error);
        }
}

const decreaseStockedProducts = async (ID) => {
    await connection()
    try {
        const result = await sql.query `UPDATE StockedProducts SET Quantity = Quantity - 1 WHERE ID = 1`
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
createCustomerOrders,
deleteCustomerOrders,
decreaseStockedProducts
}
