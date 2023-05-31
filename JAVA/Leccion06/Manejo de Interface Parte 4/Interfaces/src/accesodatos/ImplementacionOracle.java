/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package accesodatos;

/**
 *
 * @author Agus
 */
public class ImplementacionOracle implements IAccesoDatos{
    
       @Override
    public void insertar() {
        System.out.println("Insertar desde Oracle");
    }

    @Override
    public void listar() {
        System.out.println("Listar desde Oracle");
    }

    @Override
    public void actualizar() {
        System.out.println("Actualizar desde Oracle");
    }

    @Override
    public void eliminar() {
        System.out.println("Eliminar desde Oracle");
    }
    
}

