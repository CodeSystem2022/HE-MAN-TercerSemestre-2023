package test;
import domain.*;

public class TestInstanceOf{
	public static void main (String[] args){
		Empleado empleado1 = new Empleado("Mario", 1224);
		determinarTipo(empleado1);
		empleado1 = new Gerente("Jose",5000, "Sistemas");
		//determinarTipo(empleado1);

	}

	public static void determinarTipo(Empleado empleado){
		if(empleado instanceof Gerente){
			System.out.println("Es de tipo Gerente");
			((Gerente) empleado) .getDepartamento();
			Gerente gerente = (Gerente)empleado;
			System.out.printl("gerente = "+gerente.getDepartamento());

		}
		else if (empleado instanceof Empleado){
			//System.out.printl("Es de tipo empleado");
			//System.out.printl("gerente = "+gerente.getDepartamento());
		}
		else if(empleado instanceof Object){
			System.out.printl("Es de tipo Object");
		}
	}
}