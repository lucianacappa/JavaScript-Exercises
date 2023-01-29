function RemoverConsonantes(){
    let vocales = "aeiouAEIOU";
    var oracion = prompt("Ingrese una oración para que sus consonantes sean quitadas")
    console.log(string.split("").filter(char => vowels.indexOf(char) !== -1).join(""));
}
RemoverConsonantes();