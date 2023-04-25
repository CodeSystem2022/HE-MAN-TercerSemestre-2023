//codigo de javascript
// for

for(let contando=0; contando < 3 ; contando++){
    console.log(contando)
}
console.log('Fin del ciclo for')
// while
let contando = 0;
while(contando < 3){
    console.log(contando); 
    contando++;
}
console.log("Fin del ciclo while"); 

//do while
let conteo = 0;
do{
    console.log(conteo); 
    conteo++;
}while(conteo < 3);

console.log("Fin del ciclo do while");

// Palabra reservada continue y Etiquetas Labels
inicio:
for(let contando = 0; contando <= 10; contando++){
    if(contando % 2 !== 0){
        continue inicio;   //ir a la siguiente iteracion
    }
    console.log(contando);
}
console.log("Termina el ciclo");

// etiquetas label 
console.log("------------------------------------")
console.log("-------------------------")
inicio:
for(let numero = 0 ; numero<=10 ; numero++){
    if(numero % 2 !== 0){
       continue; inicio; //esto va a continuar a la siguiente interacion 
    }// el continue lo que hace es ignorar los impares y continua imprimiendo los pares 
    console.log(numero)
}
console.log("Terminar el ciclo al encontrar el primer numero par ");
// ciclo While

let contador = 0;
while(contador<3){
    console.log(contador);
    contador++;
}
console.log("Fin del ciclo while");

