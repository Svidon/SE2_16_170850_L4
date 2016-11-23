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

//Inizializzo controlId
var controlId = 2;

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
    				display: "block"
    			}, 
    				function(data) {
				        //write response
				        res.writeHead(200, {'Content-Type': 'text/html'});
				        res.end(data);
				    }
				);
    		}
    		else {
    			bind.toFile('./client.tpl', {
    				id: id,
    				display: "block"
    			}, 
    				function(data) 
				    {
				        //write response
				        res.writeHead(200, {'Content-Type': 'text/html'});
				        res.end(data);
				    }
				);
    		}
    	}
    	else {
    		console.log(id + " is negative!");
    		response.redirect("./");
    	}
    }
    else {
    	console.log(id + " is not a number!");
    	response.redirect("./");
    }

});

//Richiesta in Post per aggiungere/modificare employees
app.get('/info', function(req, res) 
{
	var url_parts = url.parse(req.url, true).query;

	var id = parseInt(url_parts.id);
	var name = url_parts.name;
	var surname = url_parts.surname;
	var level = parseInt(url_parts.level);
	var salary = parseInt(url_parts.salary);

	if(!isNaN(id)){
		if(id == null){
			employee.update(controlId, name, surname, level, salary, dict);
			console.log("Inserted: " + controlId);
			controlId++;
		}
    	else if(id >= 0){
    		employee.update(id, name, surname, level, salary, dict);
    		console.log("Inserted: " + id);
    		controlId = id + 1;
		}
		else{
			console.log(id + " is negative!");
			response.redirect("./");
		}
	}

	bind.toFile('./client.tpl', {
		display: "none"
	}, 
    	function(data) 
		   {
		       //write response
		       res.writeHead(200, {'Content-Type': 'text/html'});
		       res.end(data);
		   }
	);
  	
});

//Dove il server fa il listen
app.listen(1337, '127.0.0.1');
 
//Check dell'attivita
console.log('Server running at http://127.0.0.1:1337/');

//Per delete faccio pulsante sotto search