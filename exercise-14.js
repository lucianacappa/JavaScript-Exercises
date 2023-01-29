const months = ['Enero', 'Febrero', 'Marzo', 'Abril','Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const largos = months.filter(mes => mes.length > 7);
const mayuscula = largos.map(mes => mes.toUpperCase());
console.log("Meses largos", mayuscula)
console.log("Cantidad de meses", largos.length);