//codigo de javascript
// for

for(let contando=0; contando < 3 ; contando++){
    console.log(contando)
}
console.log('Fin del ciclo for')

// Palabra reservada break
for(let contando = 0; contando <= 10 ; contando++ ){
    if(contando % 2 == 0){
        console.log(contando); // Muestra todos los pares
        if(contando != 0){
            break
        }
    }
}
console.log('Termina el ciclo al encontrar los pares');

// La palabra continue y Etiquetas Labels
inicio:
for(let contando = 0; contando <= 10 ; contando++ ){
    if(contando % 2 !== 0){
        continue inicio; // ir al siguiente iteración
    }
    console.log(contando)
}
console.log('Termina el ciclo ');