import express from "express"
import cors from "cors"
import Router from "./routes/routes.js"

const app = express()

app.use(express.json())
app.use(cors())
app.use(Router)

app.listen(3000, () => console.log('Server running at http://localhost:3000'))







// const express = require('express');
// const app = express();
// const cors = require('cors')
// const port = process.env.PORT || 3000


// app.use(cors())
// app.use(express.json());
// const mysql = require('mysql');

// //Create connection
// const db = mysql.createConnection({
//     host     : 'us-cdbr-east-03.cleardb.com',
//     user     : 'bbf182819b2860',
//     password : 'adf022e7',
//     database: 'heroku_511310a7e136d98'
// })

// //Connect
// db.connect(function(err) {
//     if(err){
//         console.error('error connecting: ' + err.stack);
//         return;
//     }
//     console.log('Database Connected...');
// })


// app.get('/getCustomers', (req, res) => {
//     db.query('SELECT * FROM customers', (err, results) => {
//         if(!err){
//             res.send(results)
//         }
//         else{
//             console.log(err)
//         }
//     })
// })

// app.listen(port, () => {
//     console.log(`Server started on port ${port}`)
//     console.log(`http://localhost:${port}`)

// })



