//Creacion de Array o Arreglos

let autos = new Array("Ferrari", "Renault", "BMW"); // esta es la sintaxis vieja
const autos = ["Ferrari","Renault","BMW"];
console.log(autos);

//Recorremos los elementos de un arreglo

console.log(autos[0]); // Ferrari
console.log(autos[2]); // BMW

for(let i = 0; i < autos.length; i++){
	console.log(i +" : "+autos[i]);
}

// Modificamos los elementos del arreglo
autos[1] = "Volvo";
console.log(autos[1]);

