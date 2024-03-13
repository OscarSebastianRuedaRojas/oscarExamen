export class TipoApp extends HTMLElement {
    constructor(){
        super()
        this.render()  
    }
    render(){
        this.innerHTML = /* HTML */`
        <div class="containers">
            <h2>¿Que tipo de App necesitas?</h2>
            <article>
                <section class="cards" id="2000000">
                    <picture class="imgNivel">
                        <img src="storage/img/answer-2-1.png" alt="">
                    </picture>
                    <p class="text">
                        Aplicacion Android
                    </p>
                </section>
                <section class="cards" id="3000000">
                    <picture class="imgNivel">
                        <img src="storage/img/answer-2-2.png" alt="">
                    </picture>
                    <p class="text">
                        Aplicacion IOS
                    </p>
                </section>
                <section class="cards" id="800000">
                    <picture class="imgNivel">
                        <img src="storage/img/answer-2-3.png" alt="">
                    </picture>
                    <p class="text">
                        Aplicacion Windows Phone
                    </p>
                </section>
                <section class="cards" id="3500000">
                    <picture class="imgNivel">
                        <img src="storage/img/answer-2-4.png" alt="">
                    </picture>
                    <p class="text">
                        Aplicacion Android + IOS
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
            mainContent.innerHTML = "<diseño-app></diseño-app>"
        })
    });
    }
}
customElements.define("tipo-app", TipoApp)