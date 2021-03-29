// const express = require('express'),
//       bodyParser = require('body-parser'),
//       logger = require('morgan'),
//       cors = require('cors'),
//       port = process.env.PORT || 3000,
//       posts = require('./routes/api/post'),
//       purchases = require('./routes/api/purchase')
//       app = express();

// require('./mongooseConnect');
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(cors());
// app.use('/', posts);
// app.use('/purchases', purchases);

// app.listen(port, function(error) {
//     if(error) {
//         throw err;
//     }
//     console.log(`Web Application is running on port ${port}`)
//     console.log(`http://localhost:${port}`)
// })


const express = require('express');
const mysql = require('mysql');

const app = express();

app.get('/', (req, res) => {
    res.render('')
})

//Create connection
const db = mysql.createConnection({
    host     : 'us-cdbr-east-03.cleardb.com',
    user     : 'bbf182819b2860',
    password : 'adf022e7',
    database: 'heroku_511310a7e136d98'
})

//Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySQL Connected...')
})


let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server started on port ' + port);
})




