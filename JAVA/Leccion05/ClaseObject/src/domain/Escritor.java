
package domain;

public class Escritor extends Empleado {
    final TipoEscritura tipoEscritura;
    
    public Escritor(String nombre, double sueldo, TipoEscritura tipoEscritura){
        super(nombre, sueldo);
        this.tipoEscritura = tipoEscritura;
    }

    @Override
    public String obtenerDetalles() {
        return super.obtenerDetalles() + ", Tipo de escritura:" + this.tipoEscritura.getDescripcion(); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public String toString() {
        return "Escritor{" + "tipoEscritura=" + tipoEscritura + '}' + ' ' + super.toString();
    }

    public TipoEscritura getTipoEscritura() {
        return tipoEscritura;
    }
    
    
            
} 
