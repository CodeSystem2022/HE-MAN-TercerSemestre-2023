public static void main(String[] args){
	
	//Listar los estudiantes
	var estudianteDao = new EstudianteDAO();
	System.out.println("Listado de estudiantes: ");
	List<Estudiante> estudiantes = estudianteDao.listarEstudiante();
	estudiantes.forEach(System.out::println);

	// Buscar por Id
	var estudiante1 = new Estudiante(1);
	System.out.println("Estudiantes antes de la busqueda: " + estudiante1);
	var encontrado = estudianteDao.buscarEstudiantePorId(estudiante1);
	if(encontrado)
		System.out.println("Estudiante encontrado: "+estudiante1);
	else
		System.out.println("No se encontro el Estudiante: "+estudiante1.getIdEstudiante());
}


