function test2(){
	alert("Test 2");
	buscar2();
}

function buscar2(){
    var clave = document.getElementById('barrabuscador').value.toLowerCase();
    //alert("la búsqueda es: "+ clave);
    if(document.getElementById(clave) === null) alert("La página no existe.");
    else
      document.getElementById(clave).click();
  
}

function noDisponible(){
	alert('Esta funcionalidad se encuentra temporalmente fuera de servicio. Disculpen las molestias.');
}