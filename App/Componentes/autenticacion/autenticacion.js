import { sumarPrecio } from "../suma/suma.js"
export class Autenticacion extends HTMLElement {
    constructor(){
        super()
        this.render()  
    }
    render(){
        this.innerHTML = /* HTML */`
        <div class="containers">
            <h2>¿Tu App necesita sistema de autenticacion?</h2>
            <article>
                <section class="cards" id="2000000">
                    <picture class="imgNivel">
                        <img src="storage/img/answer-5-1.png" alt="">
                    </picture>
                    <p class="text">
                        Si, con redes sociales y email
                    </p>
                </section>
                <section class="cards" id="1500000">
                    <picture class="imgNivel">
                        <img src="storage/img/answer-5-2.png" alt="">
                    </picture>
                    <p class="text">
                        Si, con email
                    </p>
                </section>
                <section class="cards" id="0">
                    <picture class="imgNivel">
                        <img src="storage/img/answer-5-3.png" alt="">
                    </picture>
                    <p class="text">
                        No
                    </p>
                </section>
                <section class="cards" id="3500000">
                    <picture class="imgNivel">
                        <img src="storage/img/answer-5-4.png" alt="">
                    </picture>
                    <p class="text">
                        No lo se todavia
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
            mainContent.innerHTML = "<monetizacion-app></monetizacion-app>"
        })
    });
    }
}
customElements.define("autenticacion-app", Autenticacion)