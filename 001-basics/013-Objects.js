//definicion objeto
 var miAuto = {
    marca:"Toyota",
    modelo:"Rav4",
    annio: 2021,

 };

 //acceder a una propiedad del objeto
 miAuto.marca;

 //agregar funciones como propiedades
var miAuto = {
    marca:"Toyota",
    modelo:"Rav4",
    annio: 2021,

    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`)
    }
 };

 //-------------------------------------------
 //Funcion constructora de objetos
function auto(marca,modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;

}
//crear un nuevo objeto con el constructor
var autoNuevo1 = new auto("Tesla", "Model 3", 2020);

var autoNuevo2 = new auto("Toyota", "Rav4", 2021);
var autoNuevo3 = new auto("Tesla", "Model X", 2021);


//-------------Reto
// Loop de generación de 30 carros
var autos = [];
for (var i=0; i< 30;i++){
    var autoNuevoi = new auto(`Marca ${i}`,`Modelo ${i}`, i);
    autos.push(autoNuevoi)
}



//-------Playground-----------
function solution(car) {
    // Tu código aquí 👈
    
    if(car.licensePlate === undefined){
        var autoRespuesta = {
            color: car.color,
            brand: car.brand,
            drivingLicense: false,
        }
        return autoRespuesta;
    }else {
        
        var autoRespuesta = {
            color: car.color,
            brand: car.brand,
            licensePlate: car.licensePlate,
            drivingLicense: true,
        }
        return autoRespuesta;
    
    }
    
}

// Prueba 1
solution({
    color: 'red',
    brand: 'Kia',
  });
  
  // Prueba 2
  solution({
    color: 'gray',
    brand: 'Chevrolet',
    licensePlate: 'AAA111',
  });
  
  // Prueba 3
  solution({ licensePlate: 'RGB255'  });
  