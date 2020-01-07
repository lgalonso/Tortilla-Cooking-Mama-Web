//Navegador es Edge o no
function targetBrowser(){
  if (!(/Edge/.test(navigator.userAgent))) {
    alert('Este sitio web ha sido optimizado para su uso en Microsoft Edge. Si desea disfrutar de todas las funcionalidades abra esta página en Microsoft Edge. Disculpen las molestias.');
  }
}

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
    //alert("La búsqueda es: "+clave);
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

function buscar3(){//Buscador que admite espacios y los omite a la hora de buscar por ID
  var busqueda = document.getElementById('barra').value.toLowerCase();
  var clave = [];
  var i=0;

  while(i<busqueda.length){

    if(busqueda[i] == " ") { 
      clave[i] = "";
      if(esLetra(busqueda[i+1])) {//si el caracter siguiente es letra lo transforma a mayuscula y actualiza el contador i
        i++;
        clave[i] = busqueda[i].toUpperCase(); 
      }
    }
    else clave[i] = busqueda[i];
    i++;
  }
  
  //alert(clave.join(""));

  if(document.getElementById(clave.join("")) === null) alert("La página no existe en el sitio web o la búsqueda es errónea.");
    else
      document.getElementById(clave.join("")).click();

}
//Fin de buscador

function esLetra(entrada){//Funcion que comprueba si un caracter recibido es letra
  if( entrada >= 'a' || entrada >= 'A' || entrada <= 'z' || entrada <= 'Z' ) return true;
  else return false;
}

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

    document.getElementById("linkPerfil").href = "Perfil.html";
  }
  else alert("Existen campos incompletos en el formulario");
}

function clearLogIn(){
  document.getElementById('iniciosesion').remove();
  document.getElementById('registro').remove();
}

//Funciones del registro
function registro(){
  var datos = ['nombre', 'apellidos', 'correo', 'direccion', 'contraseña'];
  var checkbox = document.getElementById('checkbox').checked;
  var dominio = document.getElementById('dominio').value;
  var controlVacio = true;
  var controlLong = true;

  for(var i=0; i < datos.length; i++){
    
    if(document.getElementById(datos[i]).value == ""){
      controlVacio = false;
      document.getElementById("error-"+datos[i]).innerHTML = "*Este campo es obligatorio.";
    } else if(document.getElementById(datos[i]).value.length < 2) {
      controlLong = false;
      document.getElementById("error-"+datos[i]).innerHTML = "*Este campo no cumple los requisitos de longitud mínima.";
    } else document.getElementById("error-"+datos[i]).innerHTML = '';

  }

  if(dominio[0] != '@') document.getElementById('dominio').style.background = 'red';
  else document.getElementById('dominio').style.background = '#24303c';

  if(checkbox && controlVacio && controlLong && dominio[0] == '@') {
    alert("Registro completado. Inicie sesión en perfil.");
    document.getElementById('inicio').click();
  }
  else if(!checkbox){
    document.getElementById('error').innerHTML = "*Acepta los términos y condiciones para completar tu registro.";
  }


}

function correoValido(){//Función que determina si una cadena de texto tiene un formato válido de correo


}

//Funciones de contacto
function contacto(){
  var asunto = document.getElementById('asunto');
  var contenido = document.getElementById('mensaje');
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
    clearInput('mensaje');
    clearInput('email');
  } 
  else alert("Existen campos incompletos en el formulario.");
}

function clearInput(inputID){
  document.getElementById(inputID).value = "";

}

//Funciones de perfil
var datosPerfil = [];

function loadPerfil(){
  clearLogIn();
  test();
}

function restablecerContraseña(){
  var nueva = document.getElementById('nueva').value;
  var repetida = document.getElementById('repetida').value;

  if(nueva == repetida) {
    alert('Contraseña restablecida con éxito.');
    document.getElementById('linkPerfil').click();
    clearInput('nueva');
    clearInput('repetida');
  }
  else alert('Las contraseñas no coinciden. Vuelva a intentarlo.');
}

//Funciones de comentarios
function nuevoComentario(){
        var comentario = document.createElement("P");
        var nombre = document.createElement("P");
        var siguiente;
        nombre.className = 'name';
        var comentarioValor = document.getElementById('comentario').value;
        var nombreValor = document.getElementById('nombre').value;

        if(comentarioValor == "" || nombreValor == "") alert("Existen campos incompletos en el formulario.");
        else{
          comentario.innerText = '"'+comentarioValor+'"';
          nombre.innerText = '-'+formatoNombre(nombreValor)+'.';

          document.getElementById('ultimo').appendChild(comentario);
          document.getElementById('ultimo').appendChild(nombre);
          document.getElementById('ultimo').id = "";

          siguiente = document.createElement("ARTICLE");
          siguiente.id  = 'ultimo';
          document.getElementById('valoraciones').appendChild(siguiente);

          clearInput('comentario');
          clearInput('nombre');

          alert("Gracias por tu valoración "+nombreValor+".");
        }
    }

function formatoNombre(nombre){
  var formato = [];
  var control = false;
  for (var i = 0; i < nombre.length && control; i--) {
    formato[i] = nombre[i];
    if(nombre[i] == " "){
      control = true;
      formato[i+1] = nombre[i+1];
    }
  }

  return formato.join("");

}

//Controles de slideshow *NO IMPLEMENTADOS*
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
