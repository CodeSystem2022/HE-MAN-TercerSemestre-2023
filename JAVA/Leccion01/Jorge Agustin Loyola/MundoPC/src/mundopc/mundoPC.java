
package mundopc;

import ar.com.system2023.mundopc.Computadora;
import ar.com.system2023.mundopc.Monitor;
import ar.com.system2023.mundopc.Orden;
import ar.com.system2023.mundopc.Raton;
import ar.com.system2023.mundopc.Teclado;


public class mundoPC {
    public static void main(String[] args) {
       Monitor monitorHP = new Monitor("HP", 13); 
       Teclado tecladoHP = new Teclado("Bluetoorh", "HP");
       Raton ratonHP = new Raton("Bluetooth", "HP");
       Computadora computadoraHP = new Computadora("ComputadoraHP", monitorHP, tecladoHP, ratonHP);
       
       // Creamos otro objeto de diferente marca
       Monitor monitorGamer = new Monitor("Gamer", 32); 
       Teclado tecladoGamer = new Teclado("Bluetoorh", "Bluetooth");
       Raton ratonGamer = new Raton("Bluetooth", "Gamer");
       Computadora computadoraGamer = new Computadora("ComputadoraHP", monitorGamer, tecladoGamer, ratonGamer);
       
       Orden orden1 = new Orden(); // Inicializamos el arreglo vacio
       orden1.agregarComputadora(computadoraHP);
       orden1.agregarComputadora(computadoraGamer);
       orden1.mostrarOrden();
       
    }
}
