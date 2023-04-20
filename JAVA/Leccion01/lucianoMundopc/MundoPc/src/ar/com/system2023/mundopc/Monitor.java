
package ar.com.system2023.mundopc;


public class Monitor {
    private final int idMonitor;
    private String marca;       
    private double Tamanio;
    private static int ContadorMonitores;
    
    private Monitor() {
        this.idMonitor = ++Monitor.ContadorMonitores;
    }
    public Monitor(String marca, double Tamanio){
        this();// llamado al constructor vacio
        this.marca = marca;
        this.Tamanio = Tamanio;
    }

    public String getMarca() {
        return this.marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public double getTamanio() {
        return this.Tamanio;
    }

    public void setTamanio(double Tamanio) {
        this.Tamanio = Tamanio;
    }
    // Ingresamos manualmente el getidMonitor
    
    public int getidMonitor(){
        return this.idMonitor;
    }

    @Override
    public String toString() {
        return "Monitor{" + "idMonitor=" + idMonitor + ", marca=" + marca + ", Tamanio=" + Tamanio + '}';
    }
    
    
}
