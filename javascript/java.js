//Buscador
var arrayLinks = ['españa', 'europa', 'italia'];
function buscar(){
  var clave = document.getElementById('barra').value.toLowerCase();

  var control = false;
  var contador = 0;

  for(contador; contador < arrayLinks.length && !control; contador++){
      if(clave == arrayLinks[contador]) control = true;
    }

  if(control){ 
    alert("La búsqueda es: "+clave);
    document.getElementById(clave).click();
    /*La esencia del buscador está en que cuando recibimos una búsqueda válida la función va a buscar el 
    id de la página y lo va a pinchar (click de ratón) lo que provocará que se cargue la página nueva
    */
  }
  else alert("La búsqueda no se realizó porque no existe la página.");

}

function buscar2(){
    var clave = document.getElementById('barra').value.toLowerCase();
    //alert("la búsqueda es: "+ clave);
    if(document.getElementById(clave) === null) alert("La página no existe.");
    else
      document.getElementById(clave).click();
  
}
//Fin de buscador

//Funciones del registro

function registro(){
  var checkbox = document.getElementById('checkbox').checked;
  if(checkbox) window.location = "file:///C:/Users/Lucas/Desktop/U-Tad/F.%20Desarrollo%20Web/Proyecto%20Web/Repositorio/Tortilla-Cooking-Mama-Web/HTML/INICIO.html";
  else {
    document.getElementById('error').innerHTML = "*Acepta los términos y condiciones para completar tu registro.";

  }

}

//Controles de slideshow
var control=1;
var contador = setInterval( cambiar, 4500);
var cambio = 0;

function cambiar(){
  siguiente();
}


function anterior(){
  if(control<0){//Trabajamos sobre el margen del objeto 
    control+=700;
    document.getElementById('i1').src ="img"+control+".jpg";
  }
  else {
    document.getElementById('i1').src="img3.jpg";
    control = -2100;
  }
  reset();
}

function siguiente(){
  if(control>0){
    control-=700;
    document.getElementById('i1').src="img"+control+".jpg";
  }
  else {
    document.getElementById('i1').src="img1.jpg";
    control = 0;
  }
  reset();
}

function reset(){//Esta función resetea el intervalo
  clearInterval(contador);
  contador = setInterval( cambiar, 4500);

}//Fin de controles de slideshow


function noDisponible(){
  alert('Esta funcionalidad se encuentra temporalmente fuera de servicio. Disculpen las molestias.');
}

//Funciones de prueba
function test(){
  alert("Test");
}

function test2(){
  alert("Test2");
}
