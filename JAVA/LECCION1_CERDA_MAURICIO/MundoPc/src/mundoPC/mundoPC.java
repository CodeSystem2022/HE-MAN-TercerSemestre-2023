package mundoPC;
import arcom.system2023.mundopc.*;
public class mundoPC {
    public static void main(String[] args){
        Monitor monitorHP = new Monitor("HP", 13); // Importar la clase 
        Teclado tecladoHP = new Teclado("Bluetooht", "HP");
        Raton ratonHP = new Raton("Bluetooht", "HP");
        Computadoras computadoraHP = new Computadoras("Computadora HP", monitorHP, tecladoHP, ratonHP);
        
        // Creamos otros objetos de diferentes marca
        Monitor monitorGamer = new Monitor("Gamer", 77); 
        Teclado tecladoGamer = new Teclado("Bluetooht", "Gamer");
        Raton ratonGamer = new Raton("Bluetooht", "Gamer");
        Computadoras computadoraGamer = new Computadoras("Computadora Gamer", monitorGamer, tecladoGamer, ratonGamer);
        Orden orden1 = new Orden(); //Inicializamos el arreglo vacio
        Orden orden2 = new Orden(); //Una nueva lista para el objeto orden2
        orden1.agregarComputadora(computadoraHP);
        orden1.agregarComputadora(computadoraGamer);
        
        Computadoras computadorasVarias = new Computadoras("Computadoras de diferentes marca", monitorHP, tecladoGamer, ratonHP);
        orden2.agregarComputadora(computadorasVarias);        
        
        orden1.mostrarOrden();
        orden2.mostrarOrden();
    }
}
