 
package ar.com.system2023.mundopc;

public class Computadora {
    private final int idComputadora;
    private String nombre;
    private Teclado teclado;
    private Monitor monitor;
    private Raton raton;
    private static int ContadorComputadora;
    
    //constructor vacio
    Computadora(){
        this.idComputadora= ++Computadora.ContadorComputadora;
    }
    //constructor II
    Computadora(String nombre,Teclado teclado,Monitor monitor,Raton raton){
        this();
        this.nombre = nombre;
        this.monitor = monitor;
        this.raton = raton;
        this.teclado = teclado;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Teclado getTeclado() {
        return this.teclado;
    }

    public void setTeclado(Teclado teclado) {
        this.teclado = teclado;
    }

    public Monitor getMonitor() {
        return this.monitor;
    }

    public void setMonitor(Monitor monitor) {
        this.monitor = monitor;
    }

    public Raton getRaton() {
        return this.raton;
    }

    public void setRaton(Raton raton) {
        this.raton = raton;
    }
    
    public int getidComputadora(){
        return this.idComputadora;
    }

    @Override
    public String toString() {
        return "Computadora{" + "idComputadora=" + idComputadora + ", nombre=" + nombre + ", teclado=" + teclado + ", monitor=" + monitor + ", raton=" + raton + '}';
    }
    
    
}
