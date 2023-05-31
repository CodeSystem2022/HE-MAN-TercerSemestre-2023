/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package test;

import accesodatos.*;

/**
 *
 * @author Agus
 */
public class TestInterfaces {
    public static void main(String[] args) {
        IAccesoDatos datos = new ImplementacionMySql();
        //datos.listar();
        datos = new ImplementacionOracle();
        datos.listar();
        imprimir(datos);
    }
    
    public static void imprimir(IAccesoDatos datos){
        datos.listar();
    }
}
