'use strict'

// const path = require('path')
const express = require('express')
const app = express()
const mainRouter = require('./mainRoutes')

// app.get('/', function (req, res) {
//  res.send('Hello World!!')
// })

// app.get('/about', (req, res) =>{
//  res.sendFile(path.join(__dirname, 'views', 'about.html'))
// })

// mainRouter.get('/', function (req, res) {
//  res.send('Hello World!!')
// })

// mainRouter.get('/about', (req, res) => {
//  res.sendFile(path.join(__dirname, 'views', 'about.html'))
// })

app.use(mainRouter)

//app.listen(3000)
let port = process.env.PORT ||3000
app.listen(port)
console.log('Express server running on port', port)
