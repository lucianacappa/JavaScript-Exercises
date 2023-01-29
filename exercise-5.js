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