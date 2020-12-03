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
            id: {type: Number},
            title: {type: String},
            done: {type: Boolean},

            editing: {type: Boolean},
        }
    }

    constructor() {
        super();

        this.editing = false;
    }

    render() {
        return html`
            <div class="${this.done ? "todo-checked" : ""}">
                ${this.editing ?
                        html`
                            <input value="${this.title}" id="updatedTitle" name="updatedTitle"/>
                            <button @click="${this.handleSaveClick}">Save</button>
                            <button @click="${this.handleCancelClick}">Cancel</button>
                        `
                        :
                        html`
                            ${this.title}
                            <input type="checkbox" ?checked="${this.done}" @click="${this.handleCheckboxClick}"/>
                            <button @click="${this.handleEditClick}">Edit</button>
                        `
                }

                
            </div>
        `;
    }

    handleCheckboxClick(event) {
        this.dispatchEvent(new CustomEvent("checkboxClickEvent", {
            detail: {
                id: this.id,
                done: event.target.checked,
            }
        }));
    }

    handleEditClick(event) {
        this.editing = true;
    }

    handleSaveClick(event) {
        this.editing = false;

        this.dispatchEvent(new CustomEvent("updateTodoEvent", {
            detail: {
                id: this.id,
                title: this.shadowRoot.querySelector("#updatedTitle").value
            }
        }));
    }

    handleCancelClick(event) {
        this.editing = false;
    }
}

export default customElements.define("my-todo", Todo);