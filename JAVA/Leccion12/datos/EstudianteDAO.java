package UTN.dominio.datos;

import UTN.dominio.Estudiante;
import static UTN.conexion.Conexion.getConnection;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class EstudianteDAO {
    //metodo listar
    public List<Estudiante> listarEstudiantes(){
        List<Estudiante> estudiantes = new ArrayList<>();
        //creamos algunos objetos que son necesarios para comunicarlos con la base de datos
        PreparedStatement ps;//introduce la sentencia
        ResultSet rs;//obtiene el resultado
        //creamos un objeto de tipo conexion
        Connection con = getConnection();
        String sql = "SELECT * FROM estudiantes2022 ORDER BY idestudiantes2022";
        try{
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();
            while (rs.next()){
                var estudiante = new Estudiante();
                estudiante.setIdEstudiante(rs.getInt("idestudiantes2022"));
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));
                //falta agregarlo a la lista
                estudiantes.add(estudiante);
            }
        }catch (Exception e){
            System.out.println("Ocurrio un error al seleccionar datos: "+e.getMessage());
        }
        finally {
            try {
                con.close();
            }catch (Exception e){
                System.out.println("Ocurrio un error al cerrar la conexion ");
            }
        }//fin finally
        return estudiantes;
    }//fin metodo listar

    //metodo por id -> fin by id
    public boolean buscarEstudiantesPorid(EstudianteDao estudiante)
        PreparedStatement ps;
        ResultSet rs;
        Connection con = getConnection();
        String sql = "SELECT * FROM estudiantes2022 WHERE idestudiantes2022=?";
        try{
            ps = con.prepareStatement(sql);
            ps.setInt(1, estudiantes.getIdEstudiante());
            rs = ps.executeQuery();
            if(rs.next()){
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));
                return true; // se encontro un registro
            }//Fin if
        }catch (Exeption e){
        System.out.println("Ocurrio un error al buscar estudiante"+e.getMessage);
        }//Fin catch
    finally {
       try{
           con.close();
       }catch (Exeption e){
           System.out.println("Ocurrio un error al cerrar la conexion:");
       }//Fin catch
    }//Fin finally
    public static void main(String[] args){
        //Listar los estudiantes
        var EstudianteDao = new EstudianteDAO();
        System.out.println("Listado de estudiantes: ");
        List<Estudiante> estudiantes = EstudianteDao.listarEstudiantes();
        estudiantes.forEach(System.out::println); // Funcion lambda para imprimir

        // Buscar por Id
	    var estudiante1 = new Estudiante(1);
	    System.out.println("Estudiantes antes de la busqueda: " + estudiante1);
	    var encontrado = estudianteDao.buscarEstudiantePorId(estudiante1);
	    if(encontrado)
		    System.out.println("Estudiante encontrado: "+estudiante1);
	    else
		    System.out.println("No se encontro el Estudiante: "+estudiante1.getIdEstudiante());
    }

    
}
