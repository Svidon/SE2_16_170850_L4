//MI FACCIO SCRIVERE TUTTO DAL SERVER?

//Librerie
var http = require('http');
var url = require('url');
var express = require('express');
var util = require('util');
var bind = require('bind');

//Instanzio express
var app = express();
//Setto la porta del server
app.set('port', (process.env.PORT || 1337));






//Dove il server fa il listen
app.listen(1337, '127.0.0.1');
 
//Check dell'attivita
console.log('Server running at http://127.0.0.1:1337/');