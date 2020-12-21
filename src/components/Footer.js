import {LitElement, html, css} from "lit-element";

class Footer extends LitElement {
    render() {
        return html`
            <footer>
                <div class="footer-div">
                    <p>&copy;Ing Tech Travel</p>
                </div>
            </footer>
        `;
    }

    static get properties() {
        return {}
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

          p {
            font-family: 'Open Sans', sans-serif;
            font-size: 2.2rem;
          }

          footer {
            margin-top: auto;
            width: 100%;
            background-color: #070707;
          }

          footer .footer-div {
            width: 80%;
            margin: auto;
            padding: 2vh;
            color: white;
          }
        `;
    }
}

export default customElements.define('app-footer', Footer);