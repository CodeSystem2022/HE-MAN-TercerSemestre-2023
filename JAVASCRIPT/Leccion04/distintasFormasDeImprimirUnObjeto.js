let x = 10; // Variable de tipo primitiva
console.log(x.length);

//Fabio Javier Flores
//introducción a objetos en JS-Parte1y2

// Objeto 

let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gamil.com',
    edad: 30,
    nombreCompleto: function(){ // método o función en JavaScript
        return this.nombre+' '+this.apellido;
    }
    
}


console.log(typeof persona);
console.log(persona.nombre);
console.log(persona);
console.log(persona.nombreCompleto());
console.log(persona.nombreCompleto());

console.log('Ejecutamos con un objeto\n');

let persona2 = new Object(); // Debe crear un nuevo objeto en memoria
persona2.nombre = 'Juan';
persona2.diraccion = 'Salada 14';
persona2.telefono = '65435635356';
console.log(persona2.telefono)
console.log('Creamos un nuevo objeto');
console.log(persona['apellido']); // Accedemos como si fuera un arreglo
console.log()
// for in accedemos al objeto como si fuera un arreglo
console.log('Usamos el ciclo for in');
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}

console.log('Cambiamos y eliminamos un atributo');
persona.apellido = 'Betancud'; // Cambuiamos dinamicamente el valor de un objeto

console.log(persona.apellido);

// delete persona.apellido; // Eliminamos un atributo del objeto

console.log(persona.apellido);


persona.apellido = 'Gil'; // Cambuiamos dinamicamente el valor de un objeto






// Distintas formas de imprimir un objeto
// Número 1: la mas sensilla: concatenar cada valor de cada propiedad
console.log('Distintas formas de imprimir un objeto: forma 1')
console.log(persona.nombre+' '+persona.apellido);

// Número 2: a travez del ciclo for in
console.log('Distintas formas de imprimir un objeto: forma 2')
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

// Número 3: la función Object.values()
console.log('Distintas formas de imprimir un objeto: forma 3')
let personaArray = Object.values(persona);
console.log(personaArray);


// Número 4: Utilizaremos el método JSON.stringify
console.log('Distintas formas de imprimir un objeto: forma 4');
let personaString = JSON.stringify(persona);
console.log(personaString);


//Diferentes formas de crear objetos
//Caso objeto 1
let miObjeto = new Object(); //Esta es una opcion formal
//Caso objeto 2
let miObjeto2 = {}; //Esta opcion es brebe y recomendada

//Caso String 1
let miCadena = new String("Hola"); //Sintaxis formal
//Caso String 2
let miCadena2 = "Hola"; //Esta es la sintaxis simplificada y recomendada

//Caso con numeros 1
let miNumero = new Number(1); //Es formal no recomnedable
//Caso con numeros 2
let miNumero2 = 1; //Sintaxis recomendada

//Caso boolean 1
let miBoleann1 = new Boolean(false); //Formal
//Caso boolean 2
let miBoleann12 = false // Sintaxis recomendada

//Caso Arreglos 1
let miArreglo1 = new Array(); //Formal
//Caso Arreglos 2
let miArreglo2 = []; // Sintaxis recomendada

//Caso function 1
let miFuncion = new function(){}; // Todo despues de new es considerado objeto
//Caso function 2
let miFuncion2 = function(){}; //Simplificada y recomendada

//Uso de prototype
Persona3.prototype.telefono = "85967859";
console.log(padre);
console.log(madre.telefono);
madre.telefono = "5485685662";
console.log(madre.telefono);

//Uso de call
let persona4 = {
    nombre: "Juan",
    apellido: "Perez",
    nombreCompleto2: function(titulo, telefono){
        return titulo+": "+this.nombre+" "+this.apellido+" "+telefono;
        //return this.nombre+" "+this.apellido;
    }
}

let persona5 = {
    nombre : "Carlos",
    apellido : "Lara"
}

console.log(persona4.nombreCompleto2("Lic.", "54654625"));
console.log(persona4.nombreCompleto2.call(persona5, "Ing.", "456456465"));

//Metodo Apply
let arreglo = ["Ing.", "5464654652"];
console.log(persona4.nombreCompleto2.apply(persona5, arreglo));
