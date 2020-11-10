const sql = require('mssql')

const connection = async () => {
    console.log(process.env.JIDIBACKEND_CONNECTION)
    await sql.connect(process.env.JIDIBACKEND_CONNECTION,{
        enableArithAbort: true
    })
}



const createCustomerOrders = async(ID, customerName, email, cardNumber, Items, SaleAmount) => {
    await connection()
    let result 
    try {
        result = await sql.query `INSERT INTO customerOrders VALUES('Diwa', '', 500.00 )`
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
