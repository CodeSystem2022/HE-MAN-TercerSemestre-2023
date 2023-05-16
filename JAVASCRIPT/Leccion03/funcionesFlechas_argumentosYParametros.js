// Funciones flecha
const sumarFuncionFlecha = (a, b) => a+b;
resultado = sumarFuncionFlecha(3,7);
console.log(resultado)


// Funcion de tipo expresión

let sumar = function(a=4, b=8){
    console.log(arguments[0]); // arguments es una objeto de tipo array
    console.log(arguments[1]);
    console.log(arguments[2])
    return a+b
}

resultado = sumar(4,6,7);
console.log(resultado)

// sumar todos los argumentos
let respuesta = sumarTodo(5,4,13,10,9);

console.log(respuesta);

function sumarTodo(){
    suma = 0;
    for (let i = 0; i< arguments.length;i++){
        suma += arguments[i];
    }
    return suma
}


// Tipo primitivo 
let k = 10;
function cambiarValor(a){ // Paso por valor: no cambia el valor de la variable
    a=10;
}
cambiarValor(k);
console.log(k)


// paso por referencia

const persona = {
    nombre: 'Agustin',
    apellido: 'Loyola'
}

console.log(persona);

function cambiarValorObjeto(p1){
   p1.nombre = 'martin'
   p1.apellido = 'Guzman'
}

cambiarValorObjeto(persona);
console.log(persona);