class Empleado extends Persona{

    static contadorEmpleado = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleado;
        this._sueldo = sueldo;
        
    }

    get _idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        
    }

}