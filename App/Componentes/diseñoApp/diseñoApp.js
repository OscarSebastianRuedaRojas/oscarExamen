import { sumarPrecio } from "../suma/suma.js"
export class DiseñoApp extends HTMLElement {
    constructor(){
        super()
        this.render()  
    }
    render(){
        this.innerHTML = /* HTML */`
        <div class="containers">
            <h2>¿Que diseño quieres que tenga tu App?</h2>
            <article>
                <section class="cards" id="500000">
                    <picture class="imgNivel">
                        <img src="storage/img/answer-3-1.png" alt="">
                    </picture>
                    <p class="text">
                        Interfaz sencilla
                    </p>
                </section>
                <section class="cards" id="1000000">
                    <picture class="imgNivel">
                        <img src="storage/img/answer-3-2.png" alt="">
                    </picture>
                    <p class="text">
                        interfaz personalizado
                    </p>
                </section>
                <section class="cards" id="800000">
                    <picture class="imgNivel">
                        <img src="storage/img/answer-3-3.png" alt="">
                    </picture>
                    <p class="text">
                        interfaz replicada de la web
                    </p>
                </section>
                <section class="cards" id="300000">
                    <picture class="imgNivel">
                        <img src="storage/img/answer-3-4.png" alt="">
                    </picture>
                    <p class="text">
                        No necesito diseño
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
customElements.define("diseño-app", DiseñoApp)