//Funzione che mostra/nasconde il form dell'employee
function showHide() {
	//Se il form e' nascosto lo mostro
	if(document.getElementById('infos').style.display == "none"){
		document.getElementById('infos').style.display = "block";
	}
	//Se il form non e' nascosto lo nascondo
	else{
		document.getElementById('infos').style.display = "none";
	}
}