const express = require('express')
const app = express()
const studentRoutes = require('./routes/students.js')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.use('/students', studentRoutes)

module.exports = app