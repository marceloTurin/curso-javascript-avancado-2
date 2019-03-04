//Cria o array dos campos do formulario
var campos = [
	
	document.querySelector("#data"),
	document.querySelector("#quantidade"),
	document.querySelector("#valor")	
]

console.log(campos);

var tbody = document.querySelector("table tbody");

//Função que adiciona os campos na tabela
document.querySelector(".form").addEventListener("submit",function(event){

	event.preventDefault(); // Evita que a função submit carrega a pagina
	var tr = document.createElement("tr");

	//Função que cria as td dinamicamente 
	campos.forEach(function(campo){
		var td = document.createElement('td');
		td.textContent = campo.value;
		tr.appendChild(td);
	});

	//Td que calcula o volume
	var tdVolume = document.createElement("td");
	tdVolume.textContent = campos[1].value * campos[2].value;
	tr.appendChild(tdVolume);

	tbody.appendChild(tr);  //Função que inclui os campos na tabela

	//Limpa os campos
	campos[0].value = '';
	campos[1].value = 1;
	campos[2].value = 0;
	campos[0].focus();

});