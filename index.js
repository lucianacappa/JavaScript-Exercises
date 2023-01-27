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

//Ejercicio 3

const data = ['hola', 2,5,'adios'];
console.log(data[1]+ data[2])
console.log(data[1]> data[2])

//Ejercicio 4

var numero1 = 5;
var numero2 = 8; 

if (numero1 <= numero2) {
    alert (numero1 +'no es mayor que' + numero2);
}

if (numero2 > 0) {
    alert (numero2 +'es positivo');
}

if (numero1 < 0) {
    alert (numero1 +'es negativo o distinto de cero');
}

if (numero1 +1 <= numero2) {
    alert ('Incrementar en 1 unidad el valor de' + numero1 + 'no lo hace mayor o igual que' + numero2);
}

//Ejercicio 5

var dni = prompt('Inserte su dni', DNI);
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
if(dni<0 || dni>99999999){
    alert('El número proporcionado no es válido')
}
else{
    var letra = (dni%23);
    var resultado = letras[letra];
}

if(dni[8] = resultado) {
    alert('Vuestro número y letra de DNI son correctos')
}
else{
    alert('La letra que ha indicado no es correcta')
}


//Ejercicio 6
const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2];
let sum = 0;
for (let nota of notas){
    sum += nota;
}

console.log(sum)

//Ejercicio 7

function NumerosPares(){
    var numeritos = prompt("Ingrese una serie de números separados por coma", "Ej: 1,5,8,78,64").split(',');
    var sum = 0;
    for (var i =0; i < numeritos.length; i++){
        if (numeritos[i]% 2 === 0){
            sum += parseInt(numeritos[i])
        }
    }
return sum;
}

//Ejercicio 8

function RemoverConsonantes(){
    let vocales = "aeiouAEIOU";
    var oracion = prompt("Ingrese una oración para que sus consonantes sean quitadas")
    return string.split("").filter(char => vowels.indexOf(char) !== -1).join("");
}
RemoverConsonantes();

//Ejercicio 9

function CelsiusAFahrenheit(){
    var Celsius = parseInt(prompt ("Ingrese Grados Celsius para convertir a Fahrenheit"));
    var Fahrenheit = (Celsius*9/5) + 32;
    console.log(Fahrenheit);
}
CelsiusAFahrenheit();

//Ejercicio 10
function ParoImpar(){
    var Parametro = parseInt(prompt('Ingrese un número entero'))
    if (Parametro% 2 === 0){
        console.log("Su numéro es par")
    }
    if(Parametro%2 !==0){
        console.log("Su numéro es impar")
    }
}
ParoImpar()

//Ejercicio 11

function checkMayus() {
    var frase = prompt("Introduce una frase");
    
    if (phrase === frase.toUpperCase()) {
      console.log("La frase está escrita en mayúsculas");
    } else if (frase === frase.toLowerCase()) {
      console.log("La frase está escrita en minúsculas");
    } else {
      console.log("La frase está escrita con mayúsculas y minúsculas");
    }
  }
  
  checkCase();

//Ejercicio 12 
const topics = ["JavaScript", "Variables", "funciones", "condicionales", "bucles"];
const inversos = topics.reverse();
const mayus = inversos.map(topic => topic.toUpperCase());
console.log(mayus);

//Ejercicio 13

const numbers = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];
const Pares = numbers.filter(number => number % 2 === 0);
const Impares = numbers.filter(number => number % 2 !== 0);
console.log("Números Pares: ", Pares);
console.log("Números impares: ", Impares);

//Ejercicio 14

const months = ['Enero', 'Febrero', 'Marzo', 'Abril','Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const largos = months.filter(mes => mes.length > 7);
const mayuscula = largos.map(months.toUpperCase());
console.log("Meses largos", mayuscula)
console.log("Cantidad de meses", largos.length);

//Ejercicio 15
const users = [

    {username: 'ppc90', age: 30, premium: false},
    
    {username: 'lu65', age: 24, premium: true},
    
    {username: 'maria3', age: 36, premium: false},
    
    {username: 'abc123', age: 30, premium: false},
    
    {username: 'sergio58', age: 30, premium: true},
    
    ];
    const nonPremiumUsers = [];

    for (const user of users) {
      if (user.premium === true) {
        console.log(`${user.username} es usuario premium.`);
      } else {
        nonPremiumUsers.push(user);
      }
    }
    
    console.log(nonPremiumUsers);
