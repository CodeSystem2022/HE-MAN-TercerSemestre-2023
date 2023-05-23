let x = 10;
console.log(x.length);
console.log("Tipos primitivos");
// Objeto
let persona = {
    nombre: "Luciano",
    apellido: "Cortez",
    email: "luciano22@gmail.com.ar",
    edad: 28,
    idioma: "es",
    get lang(){
        return this.idioma.toUpperCase(); //Convierte las minusculas a Mayusculas
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    nombreCompleto: function(){ // Metodo o Funcion en JavaScript
        return this.nombre+" "+this.apellido;
    },
    get nombreEdad(){ // Este es el metodo get
        return "El nombre es: "+this.nombre+" y la edad es: "+this.edad;
    } 
   
}
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.email);
console.log(persona);
console.log(persona.nombreCompleto());
console.log("Ejecutando con un Objeto");
let persona2 = new Object(); //Debe crear un nuevo objeto en memoria
persona2.nombre = "Juan";
persona2.direccion = "salda 14";
persona2.telefono = "154667898";
console.log(persona2.telefono);
console.log("Creamos un nuevo Objeto");
console.log(persona["apellido"]); // Accedemos como si fuera un arreglo
console.log("Usamos el ciclo For in");
// For in y Accedemos al objeto como si fuera un arreglo
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);

}
console.log("Cambiamos y eliminamos un error");
persona.apellida = "Betancud"; // Cambiamos dinamicamente un valor del objeto
delete persona.apellida; // Eliminamos el error
console.log(persona)

//Distintas formas de imprimir un objeto
//Numero 1: la mas sencilla: concatenar cada valor de cada propiedad
console.log("Distintas formas de imprimir un objeto: forma 1");
console.log(persona.nombre+", "+persona.apellido);

//Numero 2: Atravez del ciclo For in
console.log("Distintas formas de imprimir un objeto: forma 2");
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//Numnero 3: La Funcion Object-Values()
console.log("Distintas formas de imprimir un objeto: forma 3");
let personaArray = Object.values(persona);
console.log(personaArray);

//Numero 4: Utilizaremos el Metodo JSON.stringify
console.log("Distintas formas de imprimir un objeto: forma 4"); // Le pasamos nuestro objeto y lo transforma en una cadena
let personaString = JSON.stringify(persona);
console.log(personaString);

console.log("Comenzamos a utilizar el metodo GET");
console.log(persona.nombreEdad);

console.log("Comenzamos con el metodo GET y SET para idiomas: ");
persona.lang = "en";
console.log(persona.lang);