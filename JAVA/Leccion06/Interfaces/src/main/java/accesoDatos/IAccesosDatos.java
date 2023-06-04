package accesodatos;

public interface IAccesosDatos {
    //interface no hereda de clase objets
    int MAX_REGISTRO = 10;
    
    //metodo insertar es abstracto y sin cuerpo 
    void Insertar();
    
    void listar();
    
    void Actualizar();
    
    void Eliminar();
}
