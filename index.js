//Librerie
var http = require('http');
var url = require('url');
var express = require('express');
var bind = require('bind');
var employee = require('./employee.js');

//Insieme degli employee
var dict = {};

//Istanzio alcuni dipendenti base di esempio
var qwe = employee.update(0, "Nick", "Gira", 3, 40000, dict); 
var asd = employee.update(1, "Cece", "Grigo", 1, 20000, dict);

//Inizializzo controlId
var controlId = 2;

//Istanzio express
var app = express();
//Setto la porta del server e la directory con lo script
app.set('port', (process.env.PORT || 1337));
app.use('/', express.static(__dirname + '/'));

//Richiesta in get (per cercare id) e per far partire il server
app.get('/', function(req, res)
{
	//Raccolgo il parametro "id" richiesto
	var url_parts = url.parse(req.url, true).query;
    var id = parseInt(url_parts.searchID);

    //Se trovo id stampo form sennò lo mostro vuoto -> bind{}
    if(!isNaN(id)){
    	var e = employee.getId(id, dict);
    	console.log("Found id: " + id);
    	if(e != null){
    		//Aggiungo al form l'employee che ho trovato
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
			        //Scrivo la risposta
			        res.writeHead(200, {'Content-Type': 'text/html'});
			        res.end(data);
			    }
			);
    	}
    	else {
    		//Stampo nel form l'id in caso voglia essere aggiunto un employee con quell'id
    		bind.toFile('./client.tpl', {
    			id: id,
    			display: "block"
    			}, 
    			function(data) 
			    {
			        //Scrivo la risposta
			        res.writeHead(200, {'Content-Type': 'text/html'});
			        res.end(data);
			    }
			);
    	}
    }
    else {
    	//Errore non e' un numero
    	console.log(id + " is not a number!");
    	//Faccio bind perche' la prima volta che accedo al server, esso deve generarmi la pagina client.tpl
    	bind.toFile('./client.tpl', {
    		display: "none"
    	}, 
    		function(data) 
			{
			    //Scrivo la risposta
			    res.writeHead(200, {'Content-Type': 'text/html'});
			    res.end(data);
			}
		);
    }

});


//Richiesta in get per cancellare employees
app.get('/delete', function(req,res)
{
	//Raccolgo il parametro "id" richiesto
	var url_parts = url.parse(req.url, true).query;
	var id = parseInt(url_parts.deleteID);

	console.log("To delete: " + id);

	//Controlli su id
	if(!isNaN(id)){
		if(id != null){
			//Cancello dal dizionario l'employee
			employee.delete(id, dict);
			console.log("Deleted: " + id);
		}
    	else{
    		//Id null, non posso cancellare
    		console.log("ID is null");
    		res.redirect("./");
		}
	}

	//Nascondo il form
	bind.toFile('./client.tpl', {
		display: "none"
	}, 
    	function(data) 
		   {
		       //Scrivo la risposta
		       res.writeHead(200, {'Content-Type': 'text/html'});
		       res.end(data);
		   }
	);

});


//Richiesta in get per aggiungere/modificare employees
app.get('/info', function(req, res) 
{
	//Raccolgo i parametri che mi servono
	var url_parts = url.parse(req.url, true).query;
	var id = parseInt(url_parts.id);
	var name = url_parts.name;
	var surname = url_parts.surname;
	var level = parseInt(url_parts.level);
	var salary = parseInt(url_parts.salary);

	console.log("Get for update: " + id + " " + name + " " + surname + " " + level + " " + salary);

	//Controllo che id non sia nullo
	if(id == null || isNaN(id)){
		//Aggiungo in base all'id di default
		employee.update(controlId, name, surname, level, salary, dict);
		console.log("Inserted: " + controlId);
		controlId++;
	}
    else{
    	//Aggiungo in base all'id dato
    	employee.update(id, name, surname, level, salary, dict);
    	console.log("Inserted: " + id);
    	controlId = id + 1;
	}

	//Nascondo il form
	bind.toFile('./client.tpl', {
		display: "none"
	}, 
    	function(data) 
		   {
		       //Scrivo la risposta
		       res.writeHead(200, {'Content-Type': 'text/html'});
		       res.end(data);
		   }
	);
  	
});

//Dove il server fa il listen
app.listen(1337, '127.0.0.1');
 
//Check dell'attivita
console.log('Server running at http://127.0.0.1:1337/');