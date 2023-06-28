var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";

function jugada (jug1,jug2) {

    if (jug1 === jug2){
        console.log("Empatados");
    }else if (jug1 === "piedra" && jug2 === "papel"){
        console.log("Gana el jugador 2")
    }else if (jug1 === "piedra" && jug2 === "tijera"){
        console.log("Gana el jugador 1")
    }else if (jug1 === "papel" && jug2 === "tijera"){
        console.log("Gana el jugador 2")
    }else if (jug1 === "papel" && jug2 === "piedra"){
        console.log("Gana el jugador 1")
    }else if (jug1 === "tijera" && jug2 === "piedra"){
        console.log("Gana el jugador 2")
    }else if (jug1 === "tijera" && jug2 === "papel"){
        console.log("Gana el jugador 1")
    }else {
        console.log("Las opciones deben ser: piedra, papel, tijera")
    }

}