const URL_API = "http://154.38.171.54:3001/priceN";
const myHeaders = new Headers({
    "Content-Type": "application/json"
});
const getProduct = async () => {
    try {
        const respuesta = await fetch(URL_API);
        if (respuesta.ok) {
            const datos = await respuesta.json();
            return datos;
        } else if (respuesta.status === 401) {
            console.log('La URL no es correcta');
        } else if (respuesta.status === 404) {
            console.log('El producto que buscas no existe');
        } else {
            console.log('Se presentó un error en la petición, consulte al Administrador');
        }
    } catch (error) {
        console.log(error);
    }
}
const postProduct = (datos) =>{
    fetch(`${URL_API}`,
	{
		method: "POST",
		headers: myHeaders,
		body:JSON.stringify(datos)
	}
    ).then(res=>{
        return res.json()
    })
    .catch(err=>{
        console.log(err);
    })

}
export {
    getProduct as getProducts,
    postProduct as postProducts
};