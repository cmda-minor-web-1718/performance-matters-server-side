const ejs = require('ejs')
const express = require('express')
const app = express()
app.set('view engine', 'ejs')

const port = 3000

app.get('/', function(req, res){
    res.render('index')
})

app.listen(port, function(){
    console.log('Server is online at ' + port)
})