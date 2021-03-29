import mysql from "mysql"

const db = mysql.createPool({
    host     : 'us-cdbr-east-03.cleardb.com',
    user     : 'bbf182819b2860',
    password : 'adf022e7',
    database : 'heroku_511310a7e136d98'
})

export default db;