import java.util.Scanner;

public class CalculadoraUTN {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        while (true){ //ciclo infinito
            System.out.println("*******Aplicacion Calculadora *******");
            mostrarMenu();//llamamos a la funcion menu

            try {
                var operacion = Integer.parseInt(entrada.nextLine());
                if (operacion >= 1 && operacion <= 4) {
                    
                   ejecutarOperacion(operacion,entrada);//funcion 
                 
                } else if (operacion == 5) {
                    System.out.println("Hasta Pronto...");
                    break; //rompe el ciclo y sale
                } else {
                    System.out.println("opcion erronea" + operacion);
                }
                //imprimimos un salto de linea antes de repetir el menu
            } catch (Exception e){ //fin del try
                System.out.println("Ocurrio un error" + e.getMessage());
                System.out.println();
            }// fin catch - termina 9.7 Agregamos try catch para las excepciones.
        } //fin while
    }//fin main

    private static void mostrarMenu(){
        //mostramos el menu
        System.out.println("""
                1. Suma
                2. Resta
                3. Multiplicacion
                4. Division
                5. Salir
                """);
        System.out.print("Operacion a realizar?");
    }
    private static void ejecutarOperacion(int operacion, Scanner entrada){
        System.out.print("Digite el valor para el operando1");
        var operador1 =Double.parseDouble(entrada.nextLine());
        System.out.print("Digite el valor para el operando2");
        var operador2 =Double.parseDouble(entrada.nextLine());
        double resultado;
        switch (operacion){

            case 1 ->{//suma
                resultado = operador1 + operador2;
                System.out.println("El resultado es: "+resultado);
            }
            case 2 ->{//resta
                resultado = operador1 - operador2;
                System.out.println("El resultado es:"+resultado);
            }
            case 3 ->{//multiplicacion
                resultado = operador1 * operador2;
                System.out.println("El resultado es:"+resultado);
            }
            case 4 ->{//division
                resultado = operador1 / operador2;
                System.out.println("El resultado es:"+resultado);
            }
            default -> System.out.println("OPCION ERRONEA"+operacion);
        }
    }                       
} //fin clase
