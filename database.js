const mysql = require("mysql")
require("dotenv").config()

const { MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_HOST, MYSQL_NAME } = process.env

const connection = mysql.createConnection({
    host: MYSQL_HOST,
    user: MYSQL_USERNAME,
    password: MYSQL_PASSWORD,
    database: MYSQL_NAME
})
 
function mysqlInsert(action, values) {
    connection.query(action, values, (err, result) => {
        if (err) {
            console.log(err)
            connection.end()
            throw new Error("Error in insert")
        }
        console.log("insertion succeded")
    })
    connection.end()
}

module.exports = {
    mysqlInsert
}

