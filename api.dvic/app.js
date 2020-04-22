const express = require('express')
const app = express()
const session = require('express-session')
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql')
connection = require('./connection.js')
const routes = require('./routes/routes')
require('dotenv').config()
//Set Port for API
const port = process.env.port || 3000

//Init Router
const router = express.Router()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
  });

app.use('/api',routes)

app.listen(port)
console.log('listen ' + port);
