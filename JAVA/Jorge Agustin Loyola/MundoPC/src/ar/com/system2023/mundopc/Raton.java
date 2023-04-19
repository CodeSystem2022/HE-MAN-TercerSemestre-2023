package ar.com.system2023.mundopc;

public class Raton extends DispositivoEntrada{
    private final int idRaton;
    private static int contadorRatones;
    
    
    //Contructor
    
    public Raton(String tipoEntrada, String marca) {
        super(tipoEntrada, marca);
        this.idRaton = ++Raton.contadorRatones;
    
    }
    
    // TO STRING
    @Override
    public String toString() {
        return "Raton{" + "idRaton=" + idRaton +", "+super.toString()+"}";
    }   
}