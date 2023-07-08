//es una estructura/lista de datos que guarda cietos valores

//create
var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

console.log(frutas);

console.log(frutas.length);

console.log(frutas[0]);
console.log(frutas[2]); //cereza

//como mutar el array
//push() los agrerga al final del array
var masFrutas = frutas.push("Uvas")

//pop eliminar un elemento
var ultimo = frutas.pop("Uvas")

// unshift lo agrega al inicio dle array
var nuevaLongitud = frutas.unshift("Uva")

//shift eliminar el elemento del inicio [0]
var borrarFruta = frutas.shift("Uva");

//indexof conocer la posición del elemento
var posicion = frutas.indexOf("Cereza");
