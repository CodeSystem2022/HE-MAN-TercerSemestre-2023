//let autos = new Array('Ferrari','Renault', 'BMW'); esta es la sintaxis vieja
const autos = ['Ferrari','Renault', 'BMW'];
console.log(autos)

// Recorremos los elementos de un arreglo
console.log(autos[0]);
console.log(autos[1]);
console.log(autos[2]);

for (let i = 0 ; i<3 ; i++){
    console.log(autos[i])
    
}
for (let i = 0 ; i<autos.length ; i++){
    console.log(i+1+": "+autos[i])

}