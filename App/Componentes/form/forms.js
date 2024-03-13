import { postProducts, getProducts } from "../../../Api/db/db.js"
import { devolerPrecio } from "../suma/suma.js"
export class Form extends HTMLElement {
    constructor(){
        super()
        this.render()  
    }
    render(){
        const precioTotal = devolerPrecio()
        this.innerHTML = /* HTML */`
        <form id="formulario">
            <fieldset>
                <legend> Ingresa tu Nombre completo</legend>
            <div class="input">
                <label for="descripcion">Nombre:</label>
                <input type="text" id="name" name="name"
                    placeholder="Añadir nombre" required>
            </div>
            <fieldset>
                <legend> Ingresa tu Numero de contacto</legend>
            <div class="input">
                <label for="descripcion">Numero:</label>
                <input type="number" id="numero" name="numero"
                    placeholder="Añadir numero" required>
            </div>
            <fieldset>
                <legend> Ingresa tu correo</legend>
            <div class="input">
                <label for="descripcion">Email:</label>
                <input type="email" id="email" name="email"
                    placeholder="Añadir correo" required>
            </div>
            <div class="containerSubmit">
                <button class="submit">Enviar</button>
            </div>
        </form>
    `
    const form = this.querySelector("#formulario") 
    const button = this.querySelector(".submit")
    const mainContent = document.querySelector("#mainContent")
    button.addEventListener("click", (e)=>{
        let data = Object.fromEntries(new FormData(form).entries());
        data.cotizacion = precioTotal
        console.log(data);
        postProducts(data)
        e.preventDefault();
        e.stopPropagation();
        mainContent.innerHTML = "<pagina-principal></pagina-principal>" 
    })
    }
}
customElements.define("guardar-form", Form)