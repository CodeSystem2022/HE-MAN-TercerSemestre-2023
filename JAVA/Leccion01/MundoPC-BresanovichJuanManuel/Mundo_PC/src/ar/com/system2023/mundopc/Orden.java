
package ar.com.system2023.mundopc;

public class Orden {
    private final int idOrden;
    private Computadora computadora[];//arreglo de objetos 
    private static int contadorOrdenes;
    private static final int MAX_COMPUTADORAS = 10;
    private int contadorComputadora;
   
    public Orden(){
        this.idOrden = ++Orden.contadorOrdenes;
        this.computadora = new Computadora[Orden.MAX_COMPUTADORAS];
    }
    
    //metodo para agregar una nueva computadora al arreglo 
    public void AgregarComputadora(Computadora computadora){
        
        if(this.contadorComputadora < Orden.MAX_COMPUTADORAS){
            this.computadora[this.contadorComputadora++] = computadora;
        }else{
            System.out.println("Has superado el limite"+Orden.MAX_COMPUTADORAS);
        }
    }
    //metodo mostrar orden 
    public void MostrarOrden(){
        System.out.println("Orden#: "+this.idOrden);
        System.out.println("Computadoras de la Orden#: "+this.idOrden);
        
        for(int i = 0 ;i < this.contadorComputadora;i++){
            System.out.println(this.computadora[i]);
        }
        
    }
    
}
