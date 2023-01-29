const topics = ["JavaScript", "Variables", "funciones", "condicionales", "bucles"];
const inversos = topics.reverse();
const mayus = inversos.map(topic => topic.toUpperCase());
console.log(mayus);