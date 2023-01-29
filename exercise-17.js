// Número de enlaces de la página
var numEnlaces = document.getElementsByTagName("a").length;
console.log(numEnlaces)

// Dirección a la que enlaza el penúltimo enlace
var penultimoEnlace = document.getElementsByTagName("a")[numEnlaces - 2].href;
console.log (penultimoEnlace)

// Número de enlaces del tercer párrafo
var tercerParrafo = document.getElementById("third-paragraph");
var numEnlacesTercerParrafo = tercerParrafo.getElementsByTagName("a").length;
console.log (numEnlacesTercerParrafo)
