class Persona{

    static contadorObjetosPersona = 0;
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        Persona.contadorObjetosPersona++;
        console.log("Se incrementa el contador: "+Persona.contadorObjetosPersona);
    }
}

let persona1 = new Persona("Martin", "Perez");
console.log(persona1);
let persona2 = new Persona("Luciano", "Cortez");
console.log(persona2);


//8.2 Atributos estáticos

//console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

