//Ejercicio 1
const volumen = 16*23*13;
console.log ('volumen', volumen + 'cm3');

const arealateral = 23*23; 
const areabase = 16*23;
const areaTotal = arealateral + 2*areabase
console.log('areaTotal' + areaTotal + 'cm2');

//Formula genérica 

const base = 23;
const altura = 13;
const ancho = 16;

const volumen2 = base * altura * ancho 
console.log ('volumen2', volumen2);

const area2 = base* altura + 2*base*ancho;
console.log('area2', area2);

//Ejercicio 2 

const cumple = {
    dia: 6,
    mes: 'mayo'
};

console.log ('Mi cumpleaños es el ' + cumple.dia + ' de '+ cumple.mes);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril','Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
console.log('El mes siguiente a mi cumpleaños es:' +meses[4] )