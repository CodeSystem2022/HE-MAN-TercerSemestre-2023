

class Orden{
    static contadorOrdenes = 0;
    static getMAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados =0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.getMAX_PRODUCTOS()){
            this._productos.push(producto);
            this._productos[this._contadorProductosAgregados++] = producto;
        }
        console.log("Nose pueden agregar mas productos");
        
    }


}




let producto1 = new Producto("Pantalon", 200);
let producto2 = new Producto("Camisa", 150);
console.log(producto1.toString());
console.log(producto2.toString());

