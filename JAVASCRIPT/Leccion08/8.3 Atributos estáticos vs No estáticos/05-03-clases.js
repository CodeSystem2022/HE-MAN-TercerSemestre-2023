// let perosona3 = new Persona('papa', 'poce'); // Estp no se debe hacer: Persona is not defined. Nose aplica el hoisting
class Persona{ // Clase padre
	
	static contadorObjetosPersona  = 0; //Atributo estatico
	email = 'Valor default email'; // Atriburo no estatico
	// Tanto el atributo estatico como no estatico se asocia a la clase? o solamentente es al objeto.
	// La respuesta es que el atributo estatico se asoscia a la clase ya visto. El atrubuto no estatico se asocia con los objetos.
	

	constructor(nombre, apellido){
		this._nombre = nombre;
		this._apellido = apellido;
	}

	get nombre(){
		return this._nombre;
	}

	set nombre(){
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
}

class Empleado extends Persona{ // Clase hija

	constructor(nombre, apellido, departamento){
		super(nombre, apellido);
		this._departamento = departamento;
	}

	get departamento(){
		return this._departamento;
	}

	set departamento(departamento){
		this._departamento = departamento;
	}

	//SOBREESCRITURA
	// Es modificar el comportamiento de un metodo definido en una clase padre

	nombreCompleto(){
		// return this._nombre+' '+this._apellido+' , '+this._departamento;
		super.nombreCompleto()+' , '+this._departamento; // misma forma pero resumido
	}
 
 	// Sobreeescribiendo el metodo de la clase padre (object)
	toString(){ // regresa un tostring
		// Se aplica el polimorfismo que significa = multiples formas en tiempo de ejecucion
		// el metodo q se ejecuta depende si es una referencia de tipo padre o hija
		return this.nombreCompleto();
	}

}


let persona1 = new Persona('Maca', 'Podro');
console.log(persona1.nombre);
persona1.nombre = 'Juan Carlo';
console.log(persona1.nombre);
// console.log(persona1);
let persona2 = new Persona('lara', 'trolo');
console.log(persona2.nombre);
persona2.nombre = 'Maria Luz';
console.log(persona2.nombre);
//console.log(persona2);

let empleado1 = new Empleado('lucas', 'gimenez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombre); //Hereda la info de la clase padre
console.log(empleado1.nombreCompleto());

//Object.prototype.toString Esta es la manera de acceder a atributos y metodos de manera dinamica
console.log(empleado1.toString());
console.log(persona1.toString());

// persona1.saludar(); no se utiliza desde el objeto
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

//Atributo no estatico

console.log(persona1.email); // con el objeto si
console.log(empleado1.email); // con herencia si 
console.log(Persona.email); // con la clase no podemos acceder ya q no es estatico
