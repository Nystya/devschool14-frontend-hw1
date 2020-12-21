import {
    LitElement, html, css
} from 'lit-element'

import './Navigation.js';
import './Footer.js';

class MainWrapper extends LitElement {
    render() {
        console.log(this.location);
        return html`
            <header>
                <app-navigation></app-navigation>
            </header>
            
            <slot></slot>
            
            <app-footer></app-footer>
        `;
    }

    static get styles() {
        return css`
            header {
                position: fixed;
                width: 100%;
                top: 0;
                z-index: 1;
                background-color: #070707;
                margin-bottom: 2rem;  
            }
        `;
    }
}

export default customElements.define('main-wrapper', MainWrapper);