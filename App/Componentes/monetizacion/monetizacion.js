import { sumarPrecio } from "../suma/suma.js"
export class Monetizacion extends HTMLElement {
    constructor(){
        super()
        this.render()  
    }
    render(){
        this.innerHTML = /* HTML */`
        <div class="containers">
            <h2>¿Como Monetizar con tu App?</h2>
            <article>
                <section class="cards" id="600000">
                    <picture class="imgNivel">
                        <img src="storage/img/answer-4-1.png" alt="">
                    </picture>
                    <p class="text">
                        Aplicacion gratuita con publicidad
                    </p>
                </section>
                <section class="cards" id="1000000">
                    <picture class="imgNivel">
                        <img src="storage/img/answer-4-2.png" alt="">
                    </picture>
                    <p class="text">
                        Aplicacion de pago
                    </p>
                </section>
                <section class="cards" id="2000000">
                    <picture class="imgNivel">
                        <img src="storage/img/answer-4-3.png" alt="">
                    </picture>
                    <p class="text">
                        Compras dentro de la app
                    </p>
                </section>
                <section class="cards" id="3500000">
                    <picture class="imgNivel">
                        <img src="storage/img/answer-4-4.png" alt="">
                    </picture>
                    <p class="text">
                        Otros / No lo se todavia
                    </p>
                </section>
            </article>
        </div>
    `
    const cards = this.querySelectorAll(".cards")
    const mainContent = document.querySelector("#mainContent")
    cards.forEach(card => {
        card.addEventListener("click", ()=>{
            const precio = Number(card.id)
            sumarPrecio(precio)
            mainContent.innerHTML = "<autenticacion-app></autenticacion-app>"
        })
    });
    }
}
customElements.define("monetizacion-app", Monetizacion)