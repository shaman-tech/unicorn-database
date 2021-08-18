var express = require('express')
var app = express()
var cors = require("cors");
const bodyParser = require('body-parser')
const connectMongoDB = require('./server/database/connection')
require('dotenv').config();
const PORT = process.env.PORT


//app.use('/img',express.static(__dirname + "/img"))
app.use(cors());

//mongodb connection
connectMongoDB()

app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())

//Load Routers
app.use('/',require('./server/routes/router'))

app.listen(PORT, function(){
    console.log('Node listening on port: '+ PORT)
})


/**Query Functions */

const findUnicorn = (unicornName, err)=>{
  Unicorn_Location.find({name: unicornName}, (err,unicornFound)=>{
    err ? console.error(err) : done(null,unicornFound)
  })
}

