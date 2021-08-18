const mongoose = require('mongoose')
const db = mongoose.connection
require('dotenv').config();
const url = process.env.MONGO_URI


const connectDB = ()=>{
    mongoose.connect(url, { useNewUrlParser: true })
    db.once('open', _ => {
        console.log('Database connected:', url)
    })
    
    db.on('error', err => {
        console.error('connection error:', err)
  })
}

  

  module.exports = connectDB