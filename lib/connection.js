const sql = require('mssql');



const connection = async () => {
    await sql.connect('mssql://sa:Password1@localhost,1433/TechStore',{
        enableArithAbort: true
    })
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

    //data = one object that represents a single product 
    //get a userset up and store the basket in the user session / logged in user 


    await connection()
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
    await connection();
    let result;
    try {
        result = await sql.query `INSERT INTO Staff VALUES(${data.name}, ${data.userName}, ${data.email}, ${data.userPassword})`
    } catch (error) {
        console.log('error');
    }
    return result;
}


const checkExists = async () => {
    
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