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