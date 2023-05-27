/*  Un objeto en JavaScript es una colección de datos y funciones que están relacionados entre sí 
y que pueden ser manipulados y accedidos en diferentes formas. 
Los objetos pueden ser creados de manera literal o mediante la utilización de constructores de objeto.*/

let x = 10; // variable de tipo primitivo
console.log(x.length);
console.log("Tipos Primitivos");
// Objeto
let persona ={
	nombre: 'Carlos',
	apellido: 'Gil',
	email: 'gil@gmail.com'
	edad: 28
	idioma:'ES',
	get lang(){
		return this.idioma.toUpperCase(); //Convierte las minuscula a mayuscula
	},
	set lang(lang){ //Este es el metodo set
		this.idioma = lang.toUpperCase();
	},
	nombreCompleto: function () { // metodo o funcion en JavaScript
		return this.nombre+''+this.apellido;
	},
	get nombreEdad(){ //Este es el metodo get
		return 'Elnombre es: ' + this.nombre+' edad: '+ this.edad;
	}
}

console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona.nombreCompleto());

console.log("Ejecutando con un objeto");
let persona2 = new Object(); // Debe crear un nuevo objeto en memoria 
persona2.nombre = 'Juan';
persona2.direccion = 'Alberdi 1234';
persona2.telefono= '26048362246';
console.log("Creamos un nuevo objeto");
console.log(persona2.telefono);

console.log("Usamos el ciclo for in");
// Como acceder a estas propedades de los objetos de otra manera
console.log(persona['apellido']); //Accedemos como si fuera una arreglo

//for in y accedemos al objeto como si fuera un arreglo
for(propiedad in persona){
	console.log(propiedad); // solo muestra las propiedades nombre, apellido, edad, etc
	console.log(persona[propiedad]); // muestra los datos de esas propiedades
}


console.log("Cambiamos y eliminamos un error");
//  Agregar y eliminar propiedades de los Objetos
persona.apellido = 'Chinchulin'; // Cambiamos dinamicamente un valor de un objeto
delete.persona.apellido; // Eliminamos el error
console.log(persona.apellido);

// distintas forma de imprimir un objeto
// Nº 1 La mas sencilla: contenar cada valor de cada propiedad
console.log('Distintas forma de imprimir un objeto: forma 1');
console.log.(persona.nombre+,','+persona.apellido);

//Nº 2: A traves del ciclo for in
console.log('Distintas forma de imprimir un objeto: forma 2');
for(nombrePropiedad in persona){
	console.log(persona[nombrePropiedad]);
}

// Nº 3: La funcion Objeto.values()
console.log('Distintas forma de imprimir un objeto: forma 3');
let personaArray = Object.values(persona);
console.log(personaArray);

//Nº 4: Utilizaremos el metodo JSON.stringify
console.log('Distintas formasde imprimir un objeto: forma 4');
let personaString = JSON.stringify(persona);
console.log(personaString);

//Clase 5 metodo get 
console.log('Comenzamos a utilizar el metodo get');
console.log(persona.nombreEdad); // El nombre es: Carlos edad: 28

console.log('Comenzamos con el metodo get para idiomas');
persona.lang = 'en';
console.log(persona.lang); //ES

