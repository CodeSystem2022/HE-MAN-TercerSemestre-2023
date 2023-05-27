//Uso de Call

let persona4 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto2: function(titulo, telefono){
        return titulo+': ' +this.nombre+' '+this.apellido+' '+telefono;
    }
}

let persona5 = {
    nombre: 'Carlos',
    apellido: 'Lara'

}

console.log(persona4.nombreCompleto2('Lic.','56484621'))
console.log(persona4.nombreCompleto2.call(persona5, 'Ing','651486168'))