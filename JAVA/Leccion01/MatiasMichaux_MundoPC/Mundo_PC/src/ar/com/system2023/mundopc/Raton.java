
package ar.com.system2023.mundopc;


public class Raton extends Dispositivo_Entrada {
    
   private final int idRaton;
   private static int contadorRatones;
   
   public Raton(String TipoEntrada,String marca){
       super(TipoEntrada, marca);
       this.idRaton = ++Raton.contadorRatones;
   }

    @Override
    public String toString() {
        return "Raton{" + "idRaton=" + idRaton + ' '+super.toString()+'}';
    }
   
       
       
       
   
}
