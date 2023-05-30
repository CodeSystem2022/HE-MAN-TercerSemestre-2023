
package domain;

public class Rectangulo extends FiguraGeometrica{

    public Rectangulo(String tipoFirgura) {
        super(tipoFirgura);
    }

    

    
    
    @Override
    public void dibujar(){ // Implementando el método
        System.out.println("Se imprime un: " + this.getClass().getSimpleName());
    }
    
    
}

