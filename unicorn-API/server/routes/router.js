const express = require('express');
const route = express.Router();
const services = require('../services/render')
const controller = require('../controller/controller')


/**
 *  @description Fetch Unicorn Information from Database
 * @method GET/
 */

//API
route.get('/api/users',controller.find);

/**
 *  @description Update location of unicorn
 * @method PUT/
 */
route.put('/api/unicorn/:id',controller.update)
module.exports = route