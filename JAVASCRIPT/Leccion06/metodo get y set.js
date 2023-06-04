// let persona3 = new Persona('Carla', 'Ponce'); esto no se debe hacer: Persona is not defined

class Persona{// CLASE PADRE
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido= apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
    
    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }
    nombrecompleto(){
        return this._nombre+', '+this._apellido;
    }

}

class Empleado extends Persona{
    constructor(departamento, nombre, apellido){
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    //sobreescritura 
    nombrecompleto(){
        return super.nombrecompleto()+', '+this._departamento;
    }

}

let persona1 = new Persona('Martin', 'Perez');
console.log(persona1);
let persona2 = new Persona('Carlos', 'Lara');
console.log(persona2);

// LLamamos con metodo get
console.log(persona1.nombre);
console.log(persona2.nombre);


// usamos el metodo set
persona1.nombre = 'Juan Carlos';
console.log(persona1.nombre);
persona1.apellido = 'Tapia';
console.log(persona1.apellido);


//Creamos un objeto de tipo empleado

let empleado1 = new Empleado('Sistemas', 'Maria', 'Gimenez' );
console.log(empleado1)
console.log(empleado1.nombre)
console.log(empleado1.apellido)
console.log(empleado1.departamento)
console.log(persona1.nombrecompleto());