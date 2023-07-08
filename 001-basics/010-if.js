
//la condicion debe ser verdadera para que se ejecute
if(true){
    console.log("Hola");
} else {
    console.log("false")
}



//la condicion debe ser verdadera para que se ejecute
if(true){
    console.log("Hola");
} else if (true) {
    console.log("false")
} else {
    console.log("false final")
}

//la condicion debe ser verdadera para que se ejecute
var edad = 18;

if(edad === 18){
    console.log("Puedes votar por primera vez");
} else if (edad > 18) {
    console.log("Puede votar")
} else {
    console.log("No puede votar")
}


//operador ternario
// condition ? true : false;

var numero = 1;
var resultado = numero === 1 ? "Si soy un uno" : "No, no soy uno";
