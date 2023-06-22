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
        
    }
}
