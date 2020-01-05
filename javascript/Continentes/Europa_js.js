/*como en la seccion3 quiero que una imagen sea un enlace consultar el video 20 de FM para recordar como en javascript se podia modificar
la funcion predeterminada dde las cosas-->*/

var set = setInterval(inicio, 4500);	
function inicio(){
	siguiente();
} 

var num=1;
function siguiente(){
	if(num==5){ num=1;
                 	document.getElementById("slidebar").src="../../Media/Continentes/Comidas/foto"+num+".jpg";
					document.getElementById("slidebar").alt="Imagen del plato típico alemán pretzels & patatas"
					clearInterval(set);
					set = setInterval(inicio, 4500);
			  }
	        
			else{
         	    ++num;
	             switch(num){
			
	                    case 2: document.getElementById("slidebar").src="../../Media/Continentes/Comidas/foto"+num+".jpg";
	                            document.getElementById("slidebar").alt="Imagen del plato típico español tortilla de patata";
								clearInterval(set);
								set = setInterval(inicio, 4500);
	        
			                     break;
	
	                    case 3: document.getElementById("slidebar").src="../../Media/Continentes/Comidas/foto"+num+".jpg";
	                            document.getElementById("slidebar").alt="Imagen del plato típico francés cassoulet";
								clearInterval(set);
								set = setInterval(inicio, 4500);
	        
			                     break;
			
	                    case 4: document.getElementById("slidebar").src="../../Media/Continentes/Comidas/foto"+num+".jpg";
	                            document.getElementById("slidebar").alt="Imagen del`plato típico italiano macarrones carbonara";
								clearInterval(set);
								set = setInterval(inicio, 4500);
			                    
								break;
			
	                    case 5: document.getElementById("slidebar").src="../../Media/Continentes/Comidas/foto"+num+".jpg";
	                            document.getElementById("slidebar").alt="Imagen del plato típico británico fish & chips";
								clearInterval(set);
								set = setInterval(inicio, 4500);
		    
			                     break;
	                   }
	}
}

function anterior(){
                if(num==1){	num=5;
                               document.getElementById("slidebar").src="../../Media/Continentes/Comidas/foto"+num+".jpg";
	                           document.getElementById("slidebar").alt="Imagen del plato ratatouille";
							   clearInterval(set);
							   set = setInterval(inicio, 4500);
          }
    
	             else{
		              --num;
	                      switch(num){
							  
							  case 1: document.getElementById("slidebar").src="../../Media/Continentes/Comidas/foto"+num+".jpg";
							          clearInterval(set);
									  set = setInterval(inicio, 4500);
							         
			                            break;
			
	                           case 2: document.getElementById("slidebar").src="../../Media/Continentes/Comidas/foto"+num+".jpg";
	                                   document.getElementById("slidebar").alt="Imagen del plato espaguetti alle vongole";
									   clearInterval(set);
									   set = setInterval(inicio, 4500);
									   
	                                    break;
	                    
	                           case 3: document.getElementById("slidebar").src="../../Media/Continentes/Comidas/foto"+num+".jpg";
	                                   document.getElementById("slidebar").alt="Imagen del plato salchichas & pretzels con cerveza";
									   clearInterval(set);
									   set = setInterval(inicio, 4500);
	        
			                            break;
							   case 4: document.getElementById("slidebar").src="../../Media/Continentes/Comidas/foto"+num+".jpg";
								       document.getElementById("slidebar").alt="Imagen del plato fish & chips";
									   clearInterval(set);
									   set = setInterval(inicio, 4500);
									   
									    break;
							
								
	                                   }
	                      }
	
	
}


function bla(){
	var reemplazado = document.getElementById("Img1");
	var elemento = document.createElement("p");
	var	contenido = document.createTextNode("Vitoria-Gasteiz, en 2014, consigue el título a la mayor tortilla de patata del mundo con 1.600kg de patatas,
                                      		16.000 huevos, 150l de aceite, 26kg de cebollas y 15kg de sal.");
	var	padre = document.getElementById("Img1").parentNode;
			
	elemento.appendChild(contenido);
	
	padre.replaceChild(elemento, reemplazado);
	
	
}
	

