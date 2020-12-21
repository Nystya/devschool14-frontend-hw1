import { LitElement, html, css } from "lit-element";

class MainDestination extends LitElement {
    render() {
        return html`
            <main>
                <h1>Destination</h1>
            </main>
        `;
    }

    static get styles() {
        return css``;
    }
}

export default customElements.define('main-destination-component', MainDestination);