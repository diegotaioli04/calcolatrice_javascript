function richiesta(){
	var esp = document.getElementById("esp").value;
	if(esp.includes("+")){
		nuova = esp.replace("+", "%2B");
		esp = nuova;
	}
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 400 && this.status == 200) {
			document.getElementById("printhere").innerHTML = this.responseText;
    }
	};
	xhttp.open("GET", "https://api.mathjs.org/v4/?expr="+esp+"&precision=3", true);
	xhttp.send();
	//document.getElementById("printhere").innerHTML = xhttp.status;
}