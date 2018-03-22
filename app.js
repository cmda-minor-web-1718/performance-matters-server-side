const ejs = require('ejs')
const express = require('express')
const fetch = require('node-fetch')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

const port = 3000,
    host = 'https://www.pokeapi.co/api/v2/pokemon/?limit=151'

fetch( 'https://www.pokeapi.co/api/v2/pokemon/?limit=151' )
    .then(res => res.json())
    .then(json => console.log(json))


app.get('/', function(json){
    // console.log(res)
    ejs.render('index.ejs', {pokemon: json})
})

app.listen(port, function(){
    console.log('Server is online at ' + port)
})