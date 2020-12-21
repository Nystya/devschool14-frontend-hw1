import {LitElement, html, css} from "lit-element";

class WelcomeIntro extends LitElement {
    render() {
        return html`
            <section>
                <h2>Welcome to ING Tech Travel</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam animi consequatur distinctio ea,
                    facere ipsa minus obcaecati odit quae quaerat quos repellendus tempore? Ad ducimus ea eos excepturi iusto
                    optio possimus, vel. Ea eius eligendi, excepturi hic maiores molestias officiis quam quod tenetur unde.
                    Autem commodi impedit possimus, provident qui quos sequi similique suscipit totam voluptates! Adipisci aut
                    consequuntur deleniti laudantium magni modi quos, sed totam. A eos, excepturi labore nam necessitatibus
                    nulla provident rerum temporibus veniam vero. Atque aut consequatur debitis enim id illum magni minima,
                    necessitatibus nemo nesciunt nisi omnis possimus quaerat quia repellendus sit tempore, voluptatum!</p>
            </section>
        `;
    }

    static get properties() {
        return {
        }
    }

    constructor() {
        super();
    }

    static get styles() {
        return css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          h2 {
            font-size: 4.5rem;
            padding: 2rem 0;
          }

          p {
            font-family: 'Open Sans', sans-serif;
            font-size: 2.2rem;
          }

          section {
            display: block;
            margin: auto;
            text-align: center;
            justify-content: center;
            padding: 5rem 0;
          }
        `;
    }
}

customElements.define('welcome-section', WelcomeIntro);