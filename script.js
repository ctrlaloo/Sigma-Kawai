// Botón "Ver más": muestra u oculta el cuadro que está justo después del botón
function verMas(boton){
  var extra = boton.nextElementSibling;       // el <div class="extra"> que sigue al botón
  if(extra.style.display === "block"){
    extra.style.display = "none";
    boton.textContent = "Ver más";
  }else{
    extra.style.display = "block";
    boton.textContent = "Ver menos";
  }
}
// Formulario demostrativo: no se envía a ningún servidor
function enviar(){
  alert("¡Gracias! Este formulario es solo demostrativo.");
  return false;                               // evita que la página se recargue
}
