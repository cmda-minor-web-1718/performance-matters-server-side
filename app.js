const ejs = require('ejs')
const express = require('express')
const fetch = require('node-fetch')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

const port = 3000

app.get('/', function(req, res){
    fetch( 'https://www.pokeapi.co/api/v2/pokemon/?limit=151' )
        .then(res => {
            return res.json()
        })
        .then(json => {
            console.log(json)
            // const data = json.results
            res.render('index.ejs', {pokemon: json.results})
        })
})

app.listen(port, function(){
    console.log('Server is online at ' + port)
})