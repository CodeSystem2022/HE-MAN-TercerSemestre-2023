package domain;

public class Gerente extends Empleado{
	private String departamento;

	public Gerente(String nombre, double sueldo, string departamento){
		super(nombre, sueldo;	
		this.departamento = departamento;
	}

	// sobreescribimos el metodo
	@Override
	public String obtenerDetalles(){
		return super.obtenerDetalles()+", Departamento: " +this.departamento;
	}

	public String getDepartemento (){
		return departamento;
	}

	public void setDepartemento (String departamento){
		this.departamento = departamento;
	}
} 