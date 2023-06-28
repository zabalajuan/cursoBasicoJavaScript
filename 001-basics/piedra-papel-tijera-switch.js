
function jugada (jug1,jug2) {

    switch(jug1){
        case "piedra":
            switch(jug2){
                case "piedra":
                    console.log("Empatados");
                    break;
                case "tijera":
                    console.log("Gana el jugador 1");
                    break;
                case "papel":
                    console.log("Gana el jugador 2");
                    break;
                default:
                console.log("Jug2 debe escoger: piedra, papel, tijera");
            }
            break;
        case "papel":
            switch(jug2){
                case "piedra":
                    console.log("Gana el jugador 1");
                    break;
                case "tijera":
                    console.log("Gana el jugador 2");
                    break;
                case "papel":
                    console.log("Empatados");
                    break;
                default:
                console.log("Jug2 debe escoger: piedra, papel, tijera");
            }
            break;
        case "tijera":
            switch(jug2){
                case "piedra":
                    console.log("Gana el jugador 2");
                    break;
                case "tijera":
                    console.log("Empatados");
                    break;
                case "papel":
                    console.log("Gana el jugador 1");
                    break;
                default:
                console.log("Jug2 debe escoger: piedra, papel, tijera");
            }
            break;
        default:
            console.log("Jug1 debe escoger: piedra, papel, tijera");

    }

}