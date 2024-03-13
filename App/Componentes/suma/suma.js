let precioTotal = 0

const sumar = (precio)=>{
    precioTotal += precio
    console.log(precioTotal);
}
const devolver = ()=> precioTotal
const reinicio = () => precioTotal = 0
export{
    sumar as sumarPrecio,
    devolver as devolerPrecio,
    reinicio as reinicioPrecio
}