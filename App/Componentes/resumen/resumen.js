import { devolerPrecio } from "../suma/suma.js"
export class Resumen extends HTMLElement {
    constructor(){
        super()
        this.render()  
    }
    render(){
        const precioTotal = devolerPrecio()
        this.innerHTML = /* HTML */`
        <div class="resumen">
            <p>¡Bien! ¡Hemos terminado!</p>
            <h4>¡Compartenos si te ha gustado!</h4>
            <div class="redesSociales">
                <button class="facebook">
                    <i class='bx bxl-facebook'></i>
                    Share
                </button>
                <button class="linkedin">
                    <i class='bx bxl-linkedin' ></i>
                    Share
                </button>
                <button class="Google">
                    <i class='bx bxl-google'></i>
                    Google+
                </button>
                <button class="twitter">
                    <i class='bx bxl-twitter'></i>
                    Tweet
                </button>
            </div>
            <h3>
                El costo estimado de tu app es:
            </h3>
            <h1>
                ${`${precioTotal} COP`}
            </h1>
            <a href="">
                Editar respuestas 
            </a>
            <p>En GBP contamos con los mejores <span>desarrolladores de apps y webs</span> para tu proyecto.Publica tu proyecto en GBP</p>
            <button id="terminar">Terminar</button>
        </div>
    `
    const button = this.querySelector("#terminar")
    const mainContent = document.querySelector("#mainContent")
    button.addEventListener("click", ()=>{
            mainContent.innerHTML = "<guardar-form></guardar-form>"
    })
    }
}
customElements.define("resumen-precio", Resumen)
