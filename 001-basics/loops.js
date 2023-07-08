var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}


for(var i=0;i< estudiantes.length;i++){
    saludarEstudiantes(estudiantes[i]);
}


for (var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}


function solution(estudiantes, deathCount, nuevo) {
    // Tu código aquí 👈
    if (deathCount == 0) {
      var estudiantesNueva = estudiantes.push(nuevo);
      return estudiantes;
    } else if (deathCount > 0) {
      for (var i = 0; i < deathCount; i++) {
        var estudiantesNueva = estudiantes.pop();
  
      }
      var estudianteAgregar = estudiantes.push(nuevo);
      return estudiantes;
  
    }
  }
  
  
  solution(["Nico", "Zule"], 0, "Santi");
  // Output
  //["Nico", "Zule", "Santi"]
  solution(["Juan", "Juanita", "Daniela"], 1, "Julian");
  //["Juan", "Juanita", "Julian"]
  solution(["Nath", "Luisa", "Noru"], 2, "Cami")