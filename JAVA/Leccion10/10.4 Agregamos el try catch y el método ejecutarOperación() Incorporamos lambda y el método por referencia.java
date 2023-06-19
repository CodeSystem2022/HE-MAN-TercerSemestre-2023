// Empezamos con el menu
var salir = false;
while (!salir){
	mostrarMenu();

	try{
		salir = ejecutarOperacion(entrada, personas);
	} catch (Exception e){
		System.out.println("Ocurrio un error: "+e.getMessage());
	}
	System.out.println();
}//Fin metodo main

//fin metodo mostrarMenu

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
		case 2 ->{// Listar a las personas
			System.out.println("Listado de perosnas: ");
			//Mejoras con lambda y el metodo de referencia
			//personas.forEach((personas) -> System.out.println(personas));
			personas.forEach(System.out::println);
		}// Fin case 2
		case 3 -> {// Salir del ciclo
			System.out.println("Hasta Pronto....");
			salir = true;
		} // Fin caso 3
		default ->System.out.println("Opcion incorrecta: "+opcion);
	}// Fin del switch
	return salir;
}//fin del metodo ejecutarOperacion
//Fin de la clase ListadoPersonasApp 