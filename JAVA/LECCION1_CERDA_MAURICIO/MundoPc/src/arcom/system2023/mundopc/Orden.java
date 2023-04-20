package arcom.system2023.mundopc;
public class Orden {
    
    private final int idOrden;
    private Computadoras computadora[]; // Arreglo de objetos
    private static int contadorOrdenes;
    private static int MAX_COMPUTADORAS = 10;
    private int contadorComputadora; 
    
    //Contructor vacio
    public Orden(){
        this.idOrden = ++Orden.contadorOrdenes;
        this.computadora = new Computadoras[Orden.MAX_COMPUTADORAS];
    }
    
    //Metodo para agregar una nueva computadora al arreglo
    
    public void agregarComputadora(Computadoras computadoras){
        if(this.contadorComputadora < Orden.MAX_COMPUTADORAS){
            this.computadora[this.contadorComputadora++] = computadoras;
        }
        else{
            System.out.println("Has superado el limete: " + Orden.MAX_COMPUTADORAS );
        }
    }
     // MOSTRAR ORDEN
    public void mostrarOrden(){
        System.out.println("Orden #: " + this.idOrden);
        System.out.println("Computadoras de la Orden #: " + this.idOrden);
        for(int i = 0; i < this.contadorComputadora; i++){
            System.out.println(this.computadora[i]);
        }
    }
    
}
