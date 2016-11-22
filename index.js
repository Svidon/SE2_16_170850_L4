//Librerie
var http = require('http');
var url = require('url');
var express = require('express');
var util = require('util');
var bind = require('bind');
var employee = require('./employee.js');

//Insieme degli employee
var dict = {};

//Istanzio alcuni dipendenti
var qwe = employee.update(0, "Nick", "Gira", 3, 40000, dict); 
var asd = employee.update(1, "Cece", "Grigo", 1, 20000, dict);

//Istanzio express
var app = express();
//Setto la porta del server
app.set('port', (process.env.PORT || 1337));


//Richiesta in get (per cercare id)
app.get('/', function(req, res)
{
	var url_parts = url.parse(req.url, true).query;
	
    var id = parseInt(url_parts.searchID);

    //Se trovo id stampo form sennò lo mostro vuoto -> bind{}
    if(!isNaN(id)){
    	if(id >= 0){
    		var e = employee.getId(id, dict);
    		console.log("Found id: " + id);
    		if(e != null){
    			bind.toFile('./client.tpl', {
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
    			bind.toFile('./client.tpl', {}, 
    				function(data) 
				    {
				        //write response
				        res.writeHead(200, {'Content-Type': 'text/html'});
				        res.end(data);
				    });
    		}
    	}
    	else {
    		console.log(id + " is negative!");

    		bind.toFile('./client.tpl', {}, 
    				function(data) 
				    {
				        //write response
				        res.writeHead(200, {'Content-Type': 'text/html'});
				        res.end(data);
				    });
    	}
    }
    else {
    	console.log(id + " is not a number!");

    	bind.toFile('./client.tpl', {}, 
    				function(data) 
				    {
				        //write response
				        res.writeHead(200, {'Content-Type': 'text/html'});
				        res.end(data);
				    });
    }

});

//Richiesta in Post per aggiungere/modificare employees
app.post('/', function(request, response) 
{
	var text = '';
	response.writeHead(200, {'Content-Type': 'text/html'});

    var postVar='';
	
    var body = '';			
    request.on('data', function(data) 
    {
        body += data;
    });

    request.on('end', function() 
    {
        postVar = util.parse(body);
    });

	
    text = text + 'POST: ' + util.inspect(postVar);
    text = text + "<br> <br>";

    response.end(text);
  	
});

//Dove il server fa il listen
app.listen(1337, '127.0.0.1');
 
//Check dell'attivita
console.log('Server running at http://127.0.0.1:1337/');