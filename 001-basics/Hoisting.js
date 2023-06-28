//cuando las variables y funciones se ejecutan en la carga inicial

var miNombre;

miNombre = "Roman";


//ejemplo de hoisting, llamando una variable sin declararla
console.log(miNombre2)
var miNombre2 = "Juan Roman";

//hoisting funciones, la funcion si se puede llamar, no hay hoisting
// pero con la variable si no se puede
var miNombre = undefined;
hey();

function hey(){
    console.log("Hola " + miNombre);

}

var miNombre = "Roman2"