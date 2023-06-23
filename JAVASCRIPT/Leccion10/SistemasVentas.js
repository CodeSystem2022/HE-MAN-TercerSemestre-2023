
class Producto{//clase producto
    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }

    toString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}`;
    }
}
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
calcular total(){
    let totalVenta = 0;
    for(let producto of this._productos){
        totalVenta += producto.precio;
      
    }//fin del ciclo for
    return totalVenta;
}//fin de metodo calculartotal

mostrarOrden(){
    let productoOrden = " ";
    for(let productos of this.productos){
        productosOrden += "\n{ "producto.toString()+" }";
    }//fin del ciclo for
    console.log("Orden: ${this._idOrden"}, Total: $${this.calcularTotal()}, Productos: ${productosOrden}");
    }//fin metodo mostrarOrden
    
}//fin de la claseOrden

}



//prueba clase producto
let producto1 = new Producto("Pantalon", 200);
let producto2 = new Producto("Camisa", 150);
let producto3 = new Producto("cinturon";50)
let orden1 = new Orden();
let orden2 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden1.mostrarOrden();
orden2.mostarOrden();

}


console.log(producto1.toString());
console.log(producto2.toString());

