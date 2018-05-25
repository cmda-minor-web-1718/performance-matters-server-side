const ejs = require('ejs')
const express = require('express')
var request = require('request')
const fetch = require('node-fetch')
const browserify = require('browserify')
const ngrok = require('ngrok')
const compression = require('compression')

const app = express()

app.use(compression())

app.set('view engine', 'ejs')
app.use(express.static('public'))

const port = 3000

let pokemon

const host = 'https://www.pokeapi.co/api/v2/pokemon/'

app.get('/', function(req, res) {
    fetch( host + '?limit=151')
        
    .then(res => {
        return res.json()
    })
        
    .then(json => {
        let pokemonUrl = []
        res.render('index.ejs', {pokemon: json.results})
        pokemon = json.results
    })
})

app.get('/pokemon/:name', function(req, res) {
    request( host + req.params.name, function(error, response, body) {
        const data = JSON.parse(body)
        res.render('pokemon.ejs', {pokemon: data})
    })
})

app.listen(port, function(){
    console.log('Server is online at ' + port)
})