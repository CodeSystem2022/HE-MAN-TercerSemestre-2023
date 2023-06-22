import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ListadoPersonasApp {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        //Definimos la lista fuera del ciclo while
        List<Persona> personas = new ArrayList<>();
        //Empezamos con el menú
        var salir = false;
        while(!salir){
            mostrarMenu();
            try{
                salir = ejecutarOperacion(entrada, personas);
            } catch (Exception e){
                System.out.println("Ocurrio un error: "+e.getMessage());
            }
            System.out.println();
        }//fin ciclo while
    }//Fin método main
    private static void mostrarMenu(){
        //mostrar opciones
        System.out.print("""
                ******** Listado de personas ********
                1. Agregar
                2. Listar
                3. Salir
                """);
        System.out.print("Digite una de las opciones: ");


    }//fin metodo mostrar menú
    private static boolean ejecutarOperacion(Scanner erntrada, List<Persona> personas){
        var opcion = Integer. parseInt(entrada.nextLine());
        var salir = false;
        //Revisamos la opcion digita a traves de un switch
        switch(opcion){
            case 1 -> { //Agregar una persona a la lista
                System.out.print("Digite el nombre: ");
                var nombre = entrada.nextLine();
                System.out.print("Digite el telefono: ");
                var tel = entrada.nextLine();
                System.out.print("Digite el correo: ");
                var email = entrada.nextLine();
                //creamos el objeto persona
                var persona = new Persona(nombre, tel, email);
                //Agregamos la persona ala lista
                personas.add(personas);
                System.out.println("La lista tiene: "+personas.size()+" elementos");
            }// Fin caso 1

}
