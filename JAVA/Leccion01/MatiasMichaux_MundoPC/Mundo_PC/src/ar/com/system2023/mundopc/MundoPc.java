
package ar.com.system2023.mundopc;


public class MundoPc {
    
    public static void main(String[] args) {
        Monitor monitorHP = new Monitor("hp",14);
        Teclado tecladoHP = new Teclado("bluetooh","HP");
        Raton ratonHP = new Raton("bluetooh","HP"); 
        Computadora computadoraHP = new Computadora("Computadora HP",tecladoHP ,monitorHP ,ratonHP);
        
        //Creamos otros objetos 
        Monitor monitorGamer = new Monitor("Gamer",32);
        Teclado tecladoGamer = new Teclado("bluetooh","Gamer");
        Raton ratonGamer = new Raton("bluetooh","Gamer"); 
        Computadora computadoraGamer = new Computadora("Computadora Gamer",tecladoGamer ,monitorGamer ,ratonGamer);
        
        Monitor monitorLenovo = new Monitor("Lenovo",32);
        Teclado tecladoLenovo = new Teclado("bluetooh","Lenovo");
        Raton ratonLenovo = new Raton("bluetooh","Lenovo"); 
        Computadora computadoraLenovo = new Computadora("Computadora Gamer",tecladoLenovo ,monitorLenovo ,ratonLenovo);
        
        Monitor monitorASUS = new Monitor("ASUS",32);
        Teclado tecladoASUS = new Teclado("bluetooh","ASUS");
        Raton ratonASUS = new Raton("bluetooh","ASUS"); 
        Computadora computadoraASUS = new Computadora("Computadora ASUS",tecladoASUS ,monitorASUS ,ratonASUS);
        
        Monitor monitorMEZCLA = new Monitor("MEZCLA ",32);
        Teclado tecladoMEZCLA  = new Teclado("bluetooh","MEZCLA ");
        Raton ratonMEZCLA  = new Raton("bluetooh","MEZCLA "); 
        Computadora computadoraMEZCLA  = new Computadora("Computadora MEZCLA ",tecladoGamer  ,monitorHP  ,ratonMEZCLA);
        
        Orden orden1 = new Orden ();
        Orden orden2 = new Orden ();
        Orden orden3 = new Orden ();
        Orden orden4 = new Orden ();
        orden1.AgregarComputadora(computadoraHP);
        orden1.AgregarComputadora(computadoraGamer);
        orden1.AgregarComputadora(computadoraLenovo);
        orden1.AgregarComputadora(computadoraASUS);
        orden1.AgregarComputadora(computadoraMEZCLA);
        orden1.MostrarOrden();
        System.out.println("---------------------------");
        orden2.AgregarComputadora(computadoraHP);
        orden2.AgregarComputadora(computadoraLenovo);
        orden2.MostrarOrden();
        System.out.println("---------------------------");
        orden3.AgregarComputadora(computadoraMEZCLA);
        orden3.AgregarComputadora(computadoraASUS);
        orden3.AgregarComputadora(computadoraHP);
        orden3.MostrarOrden();
        System.out.println("---------------------------");
        orden4.AgregarComputadora(computadoraGamer);
        orden4.AgregarComputadora(computadoraLenovo);
        orden4.AgregarComputadora(computadoraMEZCLA);
        orden4.MostrarOrden();
        
    }
}
