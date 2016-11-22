//Librerie
var http = require('http');
var url = require('url');
var express = require('express');
var util = require('util');
var bind = require('bind');
//var employee = require('employee.js');

//Insieme degli employee
var dict = {};

//Instanzio express
var app = express();
//Setto la porta del server
app.set('port', (process.env.PORT || 1337));


//Richiesta in get (per cercare id)
app.get('/', function(request, response) 
{
	var url_parts = url.parse(request.url, true).query;
	
    var id = url_parts.searchID;

    //Se trovo id stampo form sennò lo mostro vuoto -> bind{}
    if(!isNaN(id)){
    	if(id >= 0){
    		var e = dict[id];
    		if(e =! null){
    			bind.toFile('tpl/home.tpl', {
    				//Setto parametri
    				id: e.id,
    				name: e.name,
    				surname: e.surname,
    				level: e.level,
    				salary: e.salary,
    			}, 
    				function(data) {
				        //write response
				        res.writeHead(200, {'Content-Type': 'text/html'});
				        res.end(data);
				    }
				);
    		}
    		else {
    			bind.toFile('tpl/home.tpl', {}, 
    				function(data) 
				    {
				        //write response
				        res.writeHead(200, {'Content-Type': 'text/html'});
				        res.end(data);
				    });
    		}
    	}
    	else {
    		alert(id + " is negative!");
    		window.history.back();
    	}
    }
    else {
    	alert(id + " is not a number!");
    	window.history.back();
    }

});

//Dove il server fa il listen
app.listen(1337, '127.0.0.1');
 
//Check dell'attivita
console.log('Server running at http://127.0.0.1:1337/');