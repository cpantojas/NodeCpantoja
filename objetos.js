const producto={
    nombre:"Monitor Gamer 20\"",
    precio:300000,
    informacion:{
        peso:"1kg",
        medida:"50cm"

    },
    disponibilidad:["Los Angeles","Chillan","Concepcion"]
}

const bodega={
    nopmbreBodega:"Los Angeles",
    stockBodega:450
}

const datosObjetos={...producto,...bodega};
//console.log(datosObjetos);

console.log(Object.Keys(bodega));
console.log(Object.values(bodega));
console.log(Object.entries(bodega));

//let nombre=producto.nombre;
//let precio=producto.precio;
//let medida=producto.informacion.medida;
//Object.freeze(producto); //no permite modificar atributos objeto
//Object.seal(producto); //no permite eliminar elementos objeto
//delete producto.precio;

/*producto.nombre="computador";
producto.stock=60;

console.log(producto.nombre);
console.log(producto.precio);

const {nombre,precio,informacion:{peso}}=producto;

function imprimir({nombre="",precio=""})
{
    console.log(`Nombre:${nombre} precio:$ ${precio} peso:${peso}`);
}

imprimir(producto);

//console.log(peso);
*/