//declarativad - Functions declarations are hoisted - cargan y se pueden llamar

function miFuncion(){
    return 3;
}


//Expresion - Function expressions are not hoisted, no se pueden llamar sin ser declaradas
var miFuncion = function(a,b){
    return a + b;
}


function saludarEstudiantes(estudiante){
    console.log(estudiante);
}

function saludarEstudiantes(estudiante){
    console.log(`Hola ${estudiante}`);
}


function sumar(a,b){
    var resultado = a + b;
    return resultado
}

function sumar(a,b){
    
    return a + b;
}
