// Número de enlaces de la página
var numEnlaces = document.getElementsByTagName("a").length;

// Dirección a la que enlaza el penúltimo enlace
var penultimoEnlace = document.getElementsByTagName("a")[numEnlaces - 2].href;

// Número de enlaces del tercer párrafo
var tercerParrafo = document.getElementById("third-paragraph");
var numEnlacesTercerParrafo = tercerParrafo.getElementsByTagName("a").length;

// Pintar resultados al final de la página
var resultados = document.createElement("div");
resultados.innerHTML = "Número de enlaces de la página: " + numEnlaces + "<br>" + "Dirección del penúltimo enlace: " + penultimoEnlace + "<br>" + "Número de enlaces en el tercer párrafo: " + numEnlacesTercerParrafo;
document.body.appendChild(resultados);