let precioTotal = 0

const sumar = (precio)=>{
    precioTotal += precio
    console.log(precioTotal);
}
const devolver = ()=> precioTotal
export{
    sumar as sumarPrecio,
    devolver as devolerPrecio
}