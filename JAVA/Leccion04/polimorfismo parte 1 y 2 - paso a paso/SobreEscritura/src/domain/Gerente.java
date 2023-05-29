
package domain;

public class Gerente extends Empleado{
    private String departamento;
    
    
    
    
    public Gerente(String nombre, double sueldo, String departamento) {
        super(nombre, sueldo);
        this.departamento  = departamento;
        
    }
    
    // Sobreescibimos el metodo
    @Override
    public String obtenerDetalles() {
        return super.obtenerDetalles()+", departamento: "+this.departamento; //To change body of generated methods, choose Tools | Templates.
    }
    
    
    
}
