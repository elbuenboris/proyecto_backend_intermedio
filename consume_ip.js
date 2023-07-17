const { mysqlInsert } = require("./database.js")
const API_ENDPOINT =`https://api.ipbase.com/v1/json/`;

fetch(API_ENDPOINT)
.then(response => response.json())
.then(dataUbication => {
    const { latitude, longitude, ip, city } = dataUbication
    const sql = `INSERT INTO hours (latitude, longitude, ip, city) VALUES (?, ?, ?, ?)`
    mysqlInsert(sql, [latitude, longitude, ip, city])
})
.catch(err => console.error(err))