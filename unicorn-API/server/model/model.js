const mongoose = require('mongoose')

var schema= new mongoose.Schema({
    name: String,
    color: String,
    location: String,
    favourite_food: String

})

const unicornDB = mongoose.model('unicorns',schema)

module.exports=unicornDB