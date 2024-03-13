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
                <section class="cards">
                    <picture class="imgNivel">
                        <img src="storage/img/answer-4-1.png" alt="">
                    </picture>
                    <p class="text">
                        Aplicacion gratuita con publicidad
                    </p>
                </section>
                <section class="cards">
                    <picture class="imgNivel">
                        <img src="storage/img/answer-4-2.png" alt="">
                    </picture>
                    <p class="text">
                        Aplicacion de pago
                    </p>
                </section>
                <section class="cards">
                    <picture class="imgNivel">
                        <img src="storage/img/answer-4-3.png" alt="">
                    </picture>
                    <p class="text">
                        Compras dentro de la app
                    </p>
                </section>
                <section class="cards">
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
            mainContent.innerHTML = "<monetizacion-app></monetizacion-app>"
        })
    });
    }
}
customElements.define("monetizacion-app", Monetizacion)