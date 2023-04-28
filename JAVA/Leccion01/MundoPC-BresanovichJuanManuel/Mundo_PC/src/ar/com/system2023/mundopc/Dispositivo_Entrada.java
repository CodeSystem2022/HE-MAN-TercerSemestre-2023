
package ar.com.system2023.mundopc;


public class Dispositivo_Entrada {
    private String TipoEntrada;
    private String marca;
    
    public Dispositivo_Entrada(String TipoEntrada,String marca){
        this.TipoEntrada = TipoEntrada;
        this.marca = marca;
        
    }

    public String getTipoEntrada() {
        return this.TipoEntrada;
    }

    public void setTipoEntrada(String TipoEntrada) {
        this.TipoEntrada = TipoEntrada;
    }

    public String getMarca() {
        return this.marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    @Override
    public String toString() {
        return "Dispositivo_Entrada{" + "TipoEntrada=" + TipoEntrada + ", marca=" + marca + '}';
    }
    
    
}
