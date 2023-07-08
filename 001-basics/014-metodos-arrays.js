var articulos = [
    {nombre:"Bici", costo:3000},
    {nombre:"TV", costo:2500},
    {nombre:"libro", costo:320},
    {nombre:"Celular", costo:11000},
    {nombre:"Laptop", costo:20000},
    {nombre:"Teclado", costo:500},
    {nombre:"Audifonos", costo:1700},
      
]


//filter
//no modifica el array original, genera uno nuevo
var articulosFilatrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});


//map
//no modifica el array original, genera nuevo array
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

//find
// no modifica array original - genera un nuevoi array con un elemento
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});


//foreach
//no genera nuevo array, hace un filtrado sin modificar el original
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});


//some
//regresa validacion true or false para articulos que cumplan la funcion, generando nuevo array
// retorna true or false si la condicion se cumple
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
})

//push
//agregar elementos al array
let txtArray = ["Ana", "Carllos", "Juan"];

function addCharacters(){
    txtArray.push("Chris","Maria");

}

//shift
// elimina el elemento 0 del array
let array = [1,2,3,4,5];

let shiftArray = array.shift();

//pop
// elimina el elemento final del array
let array = [1,2,3,4,5];

let shiftArray = array.pop();







//---------playground------------
//-----------------------------------
function solution(cars) {
    // 👇 Este es el código que no funciona
    var carrosFiltrados =  cars.filter(function(car) {
      return car.licensePlate !== undefined;
  })
  return carrosFiltrados;
  
}
const cars = [
{
    color: 'red',
    brand: 'Kia',
},
{
    color: 'gray',
    brand: 'Chevrolet',
    licensePlate: 'AAA111',
},
{
    licensePlate: 'RGB255',
},
];

solution(cars);