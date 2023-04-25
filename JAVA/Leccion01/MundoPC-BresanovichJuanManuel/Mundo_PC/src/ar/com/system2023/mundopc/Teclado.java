package ar.com.system2023.mundopc;

public class Teclado extends Dispositivo_Entrada{
   private final int idTeclado;
   private static int contadorTeclados;
   
   public Teclado(String TipoEntrada,String marca){
       super(TipoEntrada, marca);
       this.idTeclado = ++Teclado.contadorTeclados;
   }

    @Override
    public String toString() {
        return "Teclado{" + "idTeclado=" + idTeclado + ' '+super.toString()+'}';
    }
   
    
}
