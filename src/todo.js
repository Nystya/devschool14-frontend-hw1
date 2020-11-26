import {
    LitElement, html, css
} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

class Todo extends LitElement {
    static get styles() {
        return css`
                .todo-checked {
                    color: red;
                }
            `;
    }

    static get properties() {
        return {
            title: {type: String},
            done: {type: Boolean}
        }
    }

    constructor() {
        super();
    }

    render() {
        return html`
                <div class="${this.done ? "todo-checked" : ""}">
                    ${this.title} 
                    <input type="checkbox" ?checked="${this.done}" @click="${this.handleCheckboxClick}"/>
                </div>
            `;
    }

    handleCheckboxClick(event) {
        console.log(event);
        this.dispatchEvent(event);
    }
}

export default customElements.define("my-todo", Todo);