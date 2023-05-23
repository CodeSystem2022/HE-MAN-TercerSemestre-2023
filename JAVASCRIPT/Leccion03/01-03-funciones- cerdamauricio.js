// UNA FUNCION ES UN CODIGO REUTILIZABLE QUE LO VAMOS A PODER LLAMAR CUANTAS VECES QUERAMOS. 


miFuncion(8, 2); // Primerro sale  en pantalla esto. Esto se lo conoce coomo hosting
// CREAMOS LA FUNCION 
function miFuncion(a,b){
	// console.log("Sumamos: " + (a + b));	

	return a + b;
}
let resultado = miFuncion(6, 7);
console.log(resultado);


// MANDAMOS A LLAMAR A LA FUNCION
miFuncion(5, 4); // segundo sale esto en pantalla



// DECLARAMOS UNA FUNCION DE TIPO EXPRESION O ANONIMA
let x = function(a, b ){return a + b}; // necesita cierre con punto y coma
resultado = x(5, 6);  //al llamarla se pone la variable y parentesis
console.log(resultado);

// FUNCIONES DE TIPO SELF Y INVOKING
//Es una funcion anonima tambien
// esta funcion no se puede reutilizar sino se usa una sola ve ya que se manda a llamar ella misma
(function (a, b){
	console.log("Ejecutando la funcion: "+ (a + b));
})(9, 6);

//TIPOS DE DATOS EN UNA FUCNION

console.log(typeof miFuncion); //Resultado: function 

function miFuncionDos(a,b){
	console.log(arguments);
	console.log(arguments.length); // permite saber la cantidad de argumento que ingresa a la funcion
}
miFuncionDos(5, 7);


//toString
var miFuncionTexto = miFuncionDos.toString();
console.log(miFuncionTexto);

// FUNCION FLECHA
// No se utiliza las llaves y la palabra fuction ni tampoco la palabra return

const sumarFuncionsFlecha = (a, b) => a + b;
resultado = sumarFuncionsFlecha(3, 7); //asignamos el valor a una variable
console.log(resultado);

// Argumentos y parámetros
// Funcion tipo Expresion
let sumar = function(a=4, b=8){
	console.log(arguments[0]); // Muestra el parametro de a que 3
	console.log(arguments[1]); // Muestra el parametro de b que 5
	return a + b + arguments[2];
}
resultado=sumar(3, 5, 9);
console.log(resultado);



// Concepto hoisting
// sumar todos los argumentos
let respuesta = sumarTodos(5, 4, 13, 10, 9); 
console.log(respuesta); // 41
function sumarTodo(){
	let suma = 0;
	for (let i = 0; i < arguments.length; i++){
		suma += arguments[i]; // arguments es parea arreglos
	}
	return suma;
}

// Paso por valor
// Tipos primitivos

let k = 10;
function cambiarValor(a){ // paso por valor
	a = 20;
}
cambiarValor(k);
console.log(k); //10 la k nunca modifico el valor de a

const persona = {
	nombre: "Juan",
	apellido: "Lepez"
}
console.log(persona); //{nombre: "juan", apellido: "lepez"} 
function cambiarValorObjeto(p1){
	p1.nombre = "Ignacio";
	p1.apellido = "Perez";
}

cambiarValorObjeto(persona);
console.log(persona); //{nombre: "ignacio", apellido: "perez"} 