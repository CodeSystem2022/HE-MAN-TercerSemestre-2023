// let persona3 = new Persona('Carla', 'Ponce'); esto no se debe hacer: Persona is not defined

class Persona{// CLASE PADRE
    static contadorPersona = 0; // Atributo estatico
    //email = 'Valor default email'; // Atributo no estatico

    

    //Fabio Javier Flores
    static get MAX_OBJ(){//Este metodo simula una constante
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido= apellido;
        
        if(Persona.contadorPersona < Persona.MAX_OBJ){
            this._idPersona= ++Persona.contadorPersona;
        }
        else{
            console.log("Se superó el número maximo de personas")
        }
        //console.log('Se incrementa el contador: '+Persona.contadorPersona)

        
        
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
        return this._nombre+' '+this._apellido;
    }
    // Sobreescribiendo el método en la clase padre (Object)
    toString(){ // Regresa un string
        // Se aplica el polimorfismo que signifíca = multiples forms en tiempo de ejecución
        // El método que se ejecura depende si es una referancia de tipo padre o hija
        return this._idPersona+' '+this.nombreCompleto();
    }
    
    //Palabra static con metodos parte 1 // Sbona Emmanuel
    static saludar(){
        console.log("Saludos desde el metodo static");
    }

    static saludar2(persona){
        console.log(persona.nombre+' '+persona.apellido); //M�todo 2 concatenamos con persona.apellido //Bresanovich Juan Manuel
    }
    //Palabra static con metodos parte 1 // Sbona Emmanuel
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

    // Sobreescritura

    nombreCompleto(){
        return super.nombreCompleto() +' '+ this._departamento
    }

    toString(){
        return super.toString();
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


//Object.prototype.toString Esta es la manera de acceder a atributos y metodos de manera dinamica
console.log(empleado1.toString());

//Palabra static con metodos parte 1 // Sbona Emmanuel
//persona1.saludar(); // No se utiliza desde el objeto
Persona.saludar();
Persona.saludar2(persona1);
//Palabra static con metodos parte 1 // Sbona Emmanuel

Empleado.saludar(); // El método es llamado desde la clase hija
Empleado.saludar2(persona1);
Empleado.saludar() //Llamamos al metodo desde la clase empleado //Bresanovich Juan Manuel
Empleado.saludar2(persona1)//Le pasamos el objeto de empleado1

//console.log(persona1.contadorObjetoPersona)
console.log(Persona.contadorPersona);
console.log(Empleado.contadorPersona);



console.log(persona1.email);
console.log(empleado1.email);
// console.log(Persona.email);  No puede acceder desde la clase

console.log(persona1.toString());
console.log(persona2.toString());
console.log(empleado1.toString());
console.log(Persona.contadorPersona);

let persona3 = new Persona('Carla', 'Pertosi');
console.log(persona3.toString());
console.log(Persona.contadorPersona);
//Fabio Javier Flores
console.log(Persona.MAX_OBJ);
//Persona.MAX_OBJ = 10; //No se puede modificar ni alterar

let persona4 = new Persona('Franco','Diaz')
console.log(persona4.toString());
let persona5 = new Persona('Liliana', 'Paz')
console.log(persona5.toString()); //persona5 no puede ser definida porque la cantidad se excedió 
