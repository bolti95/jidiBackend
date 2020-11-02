
const sql = require('mssql')

const connection = async () => {
await sql.connect('mssql://sa:')
}

module.exports

