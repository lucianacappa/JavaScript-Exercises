class geometria {
    constructor (lado){
        this.lado = lado;
    }

    perimetro(){
        return this.lado*4
    }

    area(){
        return this.lado * this.lado
    }
}

const cuadradopequeño = new geometria(2);
console.log("El perímetro del cuadrado pequeño es: " + cuadradopequeño.perimetro() + "cm");
console.log("Area of small square: " + cuadradopequeño.area() + "cm2");

const cuadradomedio = new geometria(5);
console.log("El perímetro del cuadrado pequeño es: " + cuadradomedio.perimetro() + "cm");
console.log("Area of small square: " + cuadradomedio.area() + "cm2");

const cuadradogrande = new geometria(2);
console.log("El perímetro del cuadrado pequeño es: " + cuadradogrande.perimetro() + "cm");
console.log("Area of small square: " + cuadradogrande.area() + "cm2");