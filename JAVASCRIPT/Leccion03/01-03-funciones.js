miFuncion(8, 2); // Esto se lo conoce como hosting

function miFuncion(a, b){
    //console.log("Sumamos: "+ (a + b));
    return a + b;
}

//Llamando la funcion
miFuncion(5, 4);

let resultado = miFuncion(6, 7);
console.log(resultado);

//Declaramos una funcion de tipo expresion o anónima
let x = function(a, b){return a + b}; // Necesita cierre con punto y coma
resultado = x(5, 6); // Al llamarla se pone la variable y paréntesis
console.log(resultado);


//Funciones de tipo self y invoking
(function(a, b){
    console.log("Ejecutando la Funcion: "+ (a + b));
})(9, 6);


console.log(typeof miFuncion);
function miFuncionDos(a, b){
    console.log(arguments.length);
    }
miFuncionDos(5, 7, 3, 6);

//toString
var miFuncionTexto = miFuncionDos.toString();
console.log(miFuncionTexto);

// Funciones flecha
const sumarFuncionFlecha = (a, b) => a + b;
resultado = sumarFuncionFlecha(3, 7); // Asignamos el valor a una variable
console.log(resultado);

// Funcion tipo expresion

let sumar = function(a = 4, b = 8){
    console.log(arguments[0]); // Muestra el parametro de: a
    console.log(arguments[1]); // Muestra el parametro de: b
    return a + b + arguments[2];
}
resultado = sumar(3, 2, 9);
console.log(resultado);

// Fabio Javier Flores - Concepto de Hoisting 
//Sumar todo los argumentos
let rta = SumarTodo(5,4,13,10,9);
console.log(rta); 41
function SumarTodo(){
    let suma = 0;
    for(let i = 0; i<arguments.length; i++){
        suma += arguments[i];//'arguments' es para arreglos
    }
}
//Fabio Javier Flores - Paso por valor

let k = 10;
function CambiarValor(a){ //Paso por valro
    a = 20;
}
CambiarValor(k);
console.log(k);

//Fabio Javier Flores - Paso por referencia

const Persona = {
    nombre: 'Jorge',
    apellido : 'Ramirez'
    
}
console.log(Persona);
function CambiarValorObjeto(p1){
    p1.nombre = 'Agustín';
    p1.apellido = 'Tortoza';

}
CambiarValorObjeto(Persona);
console.log(Persona); 
