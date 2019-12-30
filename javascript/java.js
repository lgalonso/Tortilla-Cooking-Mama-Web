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

//Funciones de inicio de sesión
function inicioSesion(){
  var credenciales = [document.getElementById('correo'), document.getElementById('contraseña')]
  var control = true;

  for(var i=0; i < credenciales.length; i++){
    if(credenciales[i].value == ""){
      credenciales[i].style.background = 'red';
      control = false;

    }
  }

  if(control){
    alert('Sesión iniciada con éxito. Bienvenido de nuevo '+credenciales[0].value+'.');

    for(var i=0; i < credenciales.length; i++){
      clearInput(credenciales[i].id);
    }

    clearLogIn();

    document.getElementById("titulo").click();
  }
  else alert("Existen campos incompletos en el formulario");
}

function clearLogIn(){
  document.getElementById('iniciosesion').remove();
  document.getElementById('registro').remove();
}

//Funciones del registro
function registro(){
  var checkbox = document.getElementById('checkbox').checked;
  if(checkbox) document.getElementById('inicio').click()
  else {
    document.getElementById('error').innerHTML = "*Acepta los términos y condiciones para completar tu registro.";

  }

}

//Funciones de contacto
function contacto(){
  var asunto = document.getElementById('asunto');
  var contenido = document.getElementById('contenido');
  var email = document.getElementById('email');
  var control = true;

  if(asunto.value == "") {
    asunto.style.background = 'red';
    control = false;
  }
  if(email.value ==""){
    email.style.background = 'red';
    control = false;
  }
  if(contenido.value ==""){
    contenido.style.background = 'red';
    control = false;
  }
  
  if(control){
    confirm("Su mensaje con asunto: "+asunto.value+" ha sido envíado correctamente. En un plazo de 24 horas recibirá una respuesta a la dirección: "+email.value);
    clearInput('asunto');
    clearInput('contenido');
    clearInput('email');
  } 
  else alert("Existen campos incompletos en el formulario.");
}

function clearInput(inputID){
  document.getElementById(inputID).value = "";

}

//Controles de slideshow
/*
var control=1;
var contador = setInterval( cambiar, 4500);
var cambio = 0;

function cambiar2(){
  siguiente();
}


function anterior2(){
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

function siguiente2(){
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

function reset2(){//Esta función resetea el intervalo
  clearInterval(contador);
  contador = setInterval( cambiar, 4500);

}//Fin de controles de slideshow */


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
