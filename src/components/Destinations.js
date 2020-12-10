import {LitElement, html, css} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";
import Destination from "./Destination.js";

const baseURL = 'https://devschool-2020.firebaseio.com/vajaiala-catalin/'
class Destinations extends LitElement {
    render() {
        return html`
            <section class="destinations">
                ${this.destinations.map((destination) => {
                    return html`
                        <article-destination 
                            .id="${destination.id}"
                            .title="${destination.value.title}"
                            .subtitle="${destination.value.subtitle}"
                            .description="${destination.value.description}"
                            .sources=${destination.value.sources}
                            .more="${destination.value.more}"
                        >
                        </article-destination>
                    `;
                })}
            </section>
        `;
    }

    static get properties() {
        return {
            destinations: {type: Array}
        }
    }

    constructor() {
        super();

        this.axios = window.axios.create({
            baseURL: baseURL,
            timeout: 10000,
        })

        this.destinations = []
    }

    connectedCallback() {
        super.connectedCallback();

        this.getDestinations();
    }

    async getDestinations() {
        const axios = this.axios;

        axios.get('destinations.json')
        .then((result) => {
            const destinations = result.data;

            this.destinations = Object.keys(destinations).map((destinationId) => {
                return {
                    id: destinationId,
                    value: destinations[destinationId]
                }
            }).reverse()
        }).catch((err) => {
            console.log(err);
        });
    }

    static get styles() {
        return css`
          .destinations {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: auto;
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