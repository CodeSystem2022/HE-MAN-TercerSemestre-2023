class Persona{ //Clase padre

    static contadorPersonas = 0; // Atributo estatico
    //email = "Valor default email";  //Atributo no estatico

    static get MAX_OBJ(){  //Este metodo simula una constante
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersonas;
        }
        else{
            console.log("Se ha superado el maximo de objetos permitidos");
        }
        //console.log("Se incrementa el contador: "+Persona.contadorObjetosPersona);
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

    nombreCompleto(){
        return this.idPersona+" "+this._nombre+" "+this._apellido;
    }
    // Sobreescribiedo el metodo de la clase padre(Object)
    toString(){ //Regresa un String
        //Se aplica el polimorfismo que significa = multiples formas en tiempo de ejecucion
        //El metodo que se ejecuta depende si es una refrencia de tipo padre o hija
        return this.nombreCompleto();
    }

    static saludar(){
        console.log("Saludos desde el metodo static");
    }

    static saludar2(persona){
        console.log(persona.nombre+" "+persona.apellido);
    }
}

class Empleado extends Persona{ //Clase hija
    constructor(nombre, apellido,departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }
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
