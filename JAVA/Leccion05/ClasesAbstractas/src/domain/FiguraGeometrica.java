
package domain;


public abstract class FiguraGeometrica {
    protected String tipoFigura;
    
    protected FiguraGeometrica(String tipoFirgura){
        this.tipoFigura = tipoFirgura;
    }
    
    // Método abstracto 
    public abstract void dibujar();
    
    // Agregamos el get y set

    public String getTipoFigura() {
        return tipoFigura;
    }

    public void setTipoFigura(String tipoFigura) {
        this.tipoFigura = tipoFigura;
    }
    
    
    
    
    
    
}
