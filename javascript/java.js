//Controles de slideshow
var control=1;
var contador = setInterval( cambiar, 4500);
var cambio = 0;

function cambiar(){
  siguiente();
}


function anterior(){
  if(control>1){
    control--;
    document.getElementById('i1').src ="img"+control+".jpg";
  }
  else {
    document.getElementById('i1').src="img3.jpg";
    control = 3;
  }
}

function siguiente(){
  if(control<3){
    control++;
    document.getElementById('i1').src="img"+control+".jpg";
  }
  else {
    document.getElementById('i1').src="img1.jpg";
    control = 1;
  }
}
//Fin de controles de slideshow