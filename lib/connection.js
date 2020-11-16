const sql = require('mssql');



const connection = async () => {
    await sql.connect('mssql://sa:Password1@localhost,1433/TechStore',{
        enableArithAbort: true
    })
}


const createUser = async(data) => {
    

}


const createCustomerOrders = async(data) => {
    //data is = to req.body. Can be called whatever you like
    await connection()
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

    //item ID + quantity added for each 
    //data = one object that represents a single product 
    //get a userset up and store the basket in the user session / logged in user 

    await connection()
    let result
    try {
        console.log(data)
        const result = await sql.query `UPDATE StockedProducts SET Quantity = Quantity - ${data.quantity} WHERE ID = ${data.productID}`
        // console.log(result)
    } catch (error) {
        console.log(error)
    }
}





module.exports = {
    createCustomerOrders,
    updateStockedProducts,
    createUser
}


// const deleteCustomerOrders = async(ID) => {
//     await connection()
//     try {
//        const result = await sql.query `DELETE FROM customerOrders WHERE ID = 3`

//        console.log(result)
//     } catch(error) {
//         console.log(error);
//         }
// }