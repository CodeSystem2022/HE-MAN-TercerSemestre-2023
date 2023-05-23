
package test;


public class TestAutoboxingUnboxing {
    public static void main(String[] args){
        //clases envolventes o Wrapper
        /*
            Clase envolventes de tipos primitivos 
            int = la clase envolvente es Integer
           
        
        */
        int enteroPrim = 10; //Tipo primitivo
        System.out.println("enteroPrim = " + enteroPrim);
        Integer entero = 10; //Tipo object con la clase Intiger
        System.out.println("entero = " + entero.doubleValue()); //Autoboxing
        
        int entero2 = entero; //Unboxing
        System.out.println("entero2 = " + entero2);
        
     
    }
       
   
}
