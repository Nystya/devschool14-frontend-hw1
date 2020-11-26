import {
    LitElement, html, css
} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

import Todo from "./todo.js";

class Todos extends LitElement {
    static get styles() {
    }

    static get properties() {
        return {
            todos: {type: Todo},
        }
    }

    constructor() {
        super();

        this.title = "Titlu";
        this.todos = [
            {
                title: "Wash Dishes",
                done: true
            },
            {
                title: "Do Laundry",
                done: false
            }
        ];
    }

    render() {
        return html`
        <h2> ${this.title} </h2>
        <ul>
            ${this.todos.map((todo, index) => {
                return html`
                    <my-todo .title="${todo.title}" .done="${todo.done}"></my-todo>
                `
            })}           
        </ul>
        `;
    }
}

customElements.define("my-todos", Todos);
