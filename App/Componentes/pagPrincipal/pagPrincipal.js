import { reinicioPrecio } from "../suma/suma.js"
export class PagPrincipal extends HTMLElement {
    constructor(){
        super()
        this.render()  
    }
    render(){
        this.innerHTML = /* HTML */`
        <div class="containerPrincipal">
            <picture class="imgPrincipal">
                <img src="storage/img/imagePrincipal.png" alt="">
            </picture>
            <article>
                <h1 class="textPrincipal">
                    ¿Cuanto cuesta desarrollar mi<span> app <br>GBP</span>?
                </h1>
                <p class="textSecundaryPagPrincipal">Calcula de forma rapida el costo para crear tu app, contestando estas sencilla preguntas</p>
                <button class="empezar" id="empezar">EMPEZAR</button>
            </article>
        </div>
        `
        const button = this.querySelector("#empezar")
        const mainContent = document.querySelector("#mainContent")
        button.addEventListener("click", ()=>{
            reinicioPrecio()
            mainContent.innerHTML = "<nivel-calidad></nivel-calidad>"
        })
    }
}
customElements.define("pagina-principal", PagPrincipal)