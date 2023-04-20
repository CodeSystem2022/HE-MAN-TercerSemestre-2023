
package ar.com.system2023.mundopc;


public class Teclado extends DispositivoEntrada{
     private final int idTeclado;
    private static int ContadorTeclados;
    
    public Teclado(String TipoEntrada, String marca) {
        super(TipoEntrada, marca);
        this.idTeclado = ++Teclado.ContadorTeclados;
         }

    @Override
    public String toString() {
        return "Teclado{" + "idTeclado=" + idTeclado +", "+super.toString()+ '}';
    }
    
}
