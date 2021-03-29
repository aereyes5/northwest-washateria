const mongoose = require('mongoose'),
      url = 'mongodb://127.0.0.1:27017',
      dbName = 'underwaterTP',
      connectionString = url + '/' + dbName;
 
mongoose.connect(connectionString, {
 useNewUrlParser: true,
 useUnifiedTopology: true,
 useCreateIndex: true,
 useFindAndModify: false
});
 
const db = mongoose.connection
db.on('error', console.error.bind(console, 'Failed to Connect'))





// const mysql = require('mysql');

// // First you need to create a connection to the database
// // Be sure to replace 'user' and 'password' with the correct values
// const con = mysql.createConnection({
//   host: 'localhost',
//   user: 'jandroo_hdo',
//   password: 'NWwashateria',
//   database: 'washasteria'
// });

// con.connect((err) => {
//   if(err){
//     console.log('Error connecting to Db');
//     return;
//   }
//   console.log('Connection established');
// });

// con.end((err) => {
//   // The connection is terminated gracefully
//   // Ensures all remaining queries are executed
//   // Then sends a quit packet to the MySQL server.
// });



