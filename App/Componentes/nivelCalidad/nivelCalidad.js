export class NivelCalidad extends HTMLElement {
    constructor(){
        super()
        this.render()  
    }
    render(){
        this.innerHTML = /* HTML */`
        <div class="containerNivelCalidad">
            <h2>¿Que nivel de calidad estas buscando?</h2>
            <article>
                <section class="cardNivelCalidad" id="300000">
                    <picture class="imgNivel">
                        <img src="storage/img/answer-1-1.png" alt="">
                    </picture>
                    <p class="text">
                        Calidad Optima
                    </p>
                </section>
                <section class="cardNivelCalidad" id="380000">
                    <picture class="imgNivel">
                        <img src="storage/img/answer-1-2.png" alt="">
                    </picture>
                    <p class="text">
                        Buena relacion calidad/precio
                    </p>
                </section>
                <section class="cardNivelCalidad" id="200000">
                    <picture class="imgNivel">
                        <img src="storage/img/answer-1-3.png" alt="">
                    </picture>
                    <p class="text">
                        No me importa tanto la calidad
                    </p>
                </section>
            </article>
        </div>
    `
    const cards = this.querySelectorAll(".cardNivelCalidad")
    const mainContent = document.querySelector("#mainContent")
    cards.forEach(card => {
        card.addEventListener("click", ()=>{
            const precio = Number(card.id)
            mainContent.innerHTML = "<tipo-app></tipo-app>"
        })
    });
    }
    

}
customElements.define("nivel-calidad", NivelCalidad)