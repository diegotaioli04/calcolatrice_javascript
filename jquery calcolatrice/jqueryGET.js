$(document).ready(function() {
	//identifica il bottone dall'id e procede se viene clickato
	$('#ebutton').click(function () {
		//la variabile copia il contenuto del input con id esp
		var espressione = $('#esp').val();
		if(espressione.includes("+")){
			nuova = espressione.replace("+", "%2B");
			espressione = nuova;
		}
		
		
		$.ajax(
		{
			url: 'https://api.mathjs.org/v4/?expr='+espressione+'&precision=3',
			method: 'GET',
			contenttype: 'application/json',
			success: function( data, textStatus, jQxhr){
				$("#printhere").html(data);
			},
			error: function(jQxhr, textStatus, errorThrown){
				console.log(errorThrown);
			}
		});
	});
});