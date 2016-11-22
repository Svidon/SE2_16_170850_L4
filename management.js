// Variabile controllo per msotrare il form
var check = false;

function show() {
	if(check == false){
		document.getElementById("infos").style.display = "block";
		check = true;
	}
	else {
		document.getElementById("infos").style.display = "none";
		check = false;
	}
}