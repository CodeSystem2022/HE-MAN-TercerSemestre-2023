let x = 10; // Variable de tipo primitiva
console.log(x.length);

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