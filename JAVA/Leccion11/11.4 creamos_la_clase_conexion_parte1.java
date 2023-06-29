package UTN.conexion;
import java.sql.Connection;

public class Conexion{
	public static Connection getConnection(){
		Connection conexion = null;
		//variable para conectarse a la base de datos
		var baseDatos - "estudiantes2022";
		var url = "jdbc:mysql://localhost:3306/"+baseDatos;
		var usuario = "root";
		var password = "admnin";

		// Cargamos la clase del driver de mysql en memoria
		Class.forName("com.mysql.cj.jdbc.Driver");
		conexion = DriverManager.getConnection(url, usuario, password);
	}
}