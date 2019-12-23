//Buscador
var arrayLinks = ['españa', 'europa', 'italia'];
function buscar(){
  var clave = document.getElementById('barra').value.toLowerCase();

  var control = false;
  var contador = 0;

  for(contador; contador < arrayLinks.length && !control; contador++){
      if(clave == arrayLinks[contador]) control = true;
    }

  if(control) alert("La búsqueda es: "+clave);
  else alert("La búsqueda no se realizó porque no existe la página.");

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

function reset(){
  clearInterval(contador);
  contador = setInterval( cambiar, 4500);

}

//Fin de controles de slideshow