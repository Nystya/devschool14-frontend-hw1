import {LitElement, html, css} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";
import Destination from "./Destination.js";

class Destinations extends LitElement {
    render() {
        return html`
            <section class="destinations">
                ${this.destinations.map((dest, id) => {
                    return html`
                        <article-destination .id="${id+1}"></article-destination>
                    `;
                })}
            </section>
        `;
    }

    static get properties() {
        return {}
    }

    constructor() {
        super();

        this.destinations = [{}, {}, {}, {}, {}, {}]
    }

    static get styles() {
        return css`
          .destinations {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
          }

          @media screen and (max-width: 1200px) {
            .destinations {
              display: block;
              justify-content: center;
            }
          }
        `;
    }
}

customElements.define('section-destinations', Destinations);