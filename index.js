var express = require('express');
var request = require('request');
var app = express();

var sparqlquery =  `
   PREFIX dc: <http://purl.org/dc/elements/1.1/>
   PREFIX foaf: <http://xmlns.com/foaf/0.1/>
   PREFIX sem: <http://semanticweb.cs.vu.nl/2009/11/sem/>
   SELECT DISTINCT  ?cho ?img ?date ?title ?desc WHERE {
    ?cho dc:type "Poster."^^xsd:string .
    ?cho dc:subject "Pop music."^^xsd:string .
    ?cho dc:title ?title .
    ?cho dc:description ?desc .
    ?cho foaf:depiction ?img .
    ?cho sem:hasBeginTimeStamp ?date .
  FILTER (?title != "[Poster.]"^^xsd:string)
  FILTER (?title != "Paradiso Talentenshow."^^xsd:string)
  FILTER (?title != "Talentenshow."^^xsd:string)
  FILTER (?title != "Talentengala."^^xsd:string)
  FILTER (?title != "Paradiso talentenshow."^^xsd:string)
  FILTER (?title != "Talentenshow Paradiso."^^xsd:string)
  FILTER (?title != "Paradiso Talenten Gala."^^xsd:string)
  FILTER (?title != "Paradiso TalentenGala."^^xsd:string)
  FILTER (?title != "Talenten Gala!"^^xsd:string)
  FILTER (?title != "Paradiso Talentenshow Gala."^^xsd:string)
  }
  ORDER BY ?date
  LIMIT 1000`
var encodedquery = encodeURIComponent(sparqlquery);
var host = 'https://api.data.adamlink.nl/datasets/AdamNet/all/services/endpoint/sparql?default-graph-uri=&query=' + encodedquery + '&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on'

app.get('/', function (req, res) {
  res.send('Hola, Comestas');
  request(host, function(error, request, body){
    var data = JSON.parse(body);
    var rows = data.results.bindings;
    console.log(rows);
    
  })
});

app.listen(3000);
