
package aritmetica;

import excepciones.OperacionExcepcion;

public class Aritmetica {
    public static int division(int numerador, int denominador) throws OperacionExcepcion{
        if(denominador == 0){// Si el denominador es igual a cero, se lanza una excepción personalizada llamada "OperacionExcepcion" con el mensaje "División por cero"
            throw new OperacionExcepcion("Divisíon por cero");
        }
        return  numerador/denominador;
    }
}
