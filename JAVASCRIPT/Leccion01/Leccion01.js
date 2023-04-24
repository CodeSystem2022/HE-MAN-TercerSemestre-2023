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

