
package test;

import static aritmetica.Aritmetica.division;
import excepciones.OperacionExcepcion;

public class TestExepciones {
    public static void main(String[] args) {
        int resultado = 0;
        try{
            resultado = division(10, 0);
        }catch(OperacionExcepcion e){
            System.out.println("Ocurrio un error de tipo OperacionException");
            System.out.println(e.getMessage());
        }catch(Exception e)               {
            System.out.println("Ocurrio un Error");
            e.printStackTrace(System.out); // Se conoce como la pila de excepciones
            System.out.println(e.getMessage());
        }finally{
            System.out.println("Se reviso la división entre cero");
        }
        System.out.println("La variable de resultado tiene como valor: "+resultado);
    }
}
