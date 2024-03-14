let p1,p2,p3,p4,suma=0,articulos=400000,total


let inventarios=()=> {
    alert("BIENVENIDOS A SURA \n LAS SIGUIENTES PREGUNTAS ES PARA ACTUALIZAR LOS INVENTARIO DE LAS CIUDADES")
    p1=parseInt(prompt("ingresa la cantidad de articulos que se encuentra en DC SOLUTIONS proveedor "))
    if (p1!="0") {
        p2=parseInt(prompt("ingresa la cantidad de articulos que se encuentra en CMO proveedor "))
        if (p2!="0") {
            p3=parseInt(prompt("ingresa la cantidad de articulos que se encuentra en SONAR proveedor "))
            if (p3!="0") {
                p4=parseInt(prompt("por favor ingresa la cantidad de articulos en Bodega"))
                if (p4!="0") {
                    alert("el Inventario ha sido actualizado exitosamente")
                suma+=p1+p2+p3
                alert("El TOTAL de articulos acumulados en las ciudades es= "+ suma)
                } else {
                    alert("no se actuliaza inventario del proveedor")
                }
            } else {
                alert("no se actuliaza inventario del proveedor")
            }
        } else {
            alert("no se actuliaza inventario del proveedor")
        }
    } else {
        alert("no se actuliaza inventario del proveedor")
    }
    total=articulos*suma
    alert("El TOTAL valor de articulos entregados a facturar es= "+ total)
    alert("Actualizacion Exitosa \n Gracias Adios")

}
// let InIndividual=()=> {
    // alert("Ingresaste a actualizar inventario individual")
    // proveedor=parseInt(prompt("ingresa la cantidad de articulos que actulizara proveedor individual"))
    // if (proveedor!="0") {
        // alert("inventario actualizado")
        // suma=proveedor+suma
    // }
    // else{
        // alert("no se actualiza inventario")
    // }
    // alert("el total de inventario es de: "+ suma)
// }

let InIndividual = (inventario) => {
    alert("Ingresaste a actualizar inventario individual");
    let proveedor = parseInt(prompt("Ingresa la cantidad de artículos que actualizará el proveedor individual"));
    if (!isNaN(proveedor)) {
        alert("Inventario actualizado");
        inventario.push(proveedor);
    } else {
        alert("No se actualiza el inventario");
    }
    let suma = inventario.reduce((total, cantidad) => total + cantidad, 0);
    alert("El total de inventario es de: " + suma);
}

// Definir un vector de inventario
let inventario=[];