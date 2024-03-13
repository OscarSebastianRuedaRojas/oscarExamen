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
                <section class="cards">
                    <picture class="imgNivel">
                        <img src="storage/img/answer-2-1.png" alt="">
                    </picture>
                    <p class="text">
                        Aplicacion Android
                    </p>
                </section>
                <section class="cards">
                    <picture class="imgNivel">
                        <img src="storage/img/answer-2-2.png" alt="">
                    </picture>
                    <p class="text">
                        Aplicacion IOS
                    </p>
                </section>
                <section class="cards">
                    <picture class="imgNivel">
                        <img src="storage/img/answer-2-3.png" alt="">
                    </picture>
                    <p class="text">
                        Aplicacion Windows Phone
                    </p>
                </section>
                <section class="cards">
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
    }
}
customElements.define("tipo-app", TipoApp)