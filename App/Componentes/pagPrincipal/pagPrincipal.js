export class pagPrincipal extends HTMLElement {
    constructor(){
        super()
        this.render()  
    }
    render(){
        console.log("holaaaa");
        this.innerHTML = /* HTML */`
        <div class="container">
            <picture class="imgPrincipal">
                <img src="storage/img/imagePrincipal.png" alt="">
            </picture>
            <article>
                <h1>
                    ¿Cuanto cuesta desarrollar mi<span> app <br>GBP</span>?
                </h1>
                <p>Calcula de forma rapida el costo para crear tu app, contestando estas sencilla preguntas</p>
                <button class="empezar" id="empezar">EMPEZAR</button>
            </article>
        </div>
        `
    }
}
customElements.define("pagina-principal", pagPrincipal)