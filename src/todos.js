import {html, LitElement} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

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

        this.postsLink = "https://jsonplaceholder.typicode.com/todos"
        this.axios = window.axios;

        this.title = "Titlu";

        this.todos = []

        this.getPosts()
    }

    render() {
        console.log("rendering")
        return html`
            <h2> ${this.title} </h2>
            
            <form @submit="${this.handleTodoSubmit}">
                <input type="text" placeholder="New Todo" name="todoTitle" id="todoTitle">
                <input type="submit" value="Add">
            </form>
            
            <ul>
                ${this.todos.map((todo, index) => {
                    return html`
                        <my-todo 
                                .id="${index}" 
                                .title="${todo.title}" 
                                .done="${todo.done}"
                                @checkboxClickEvent="${this.handleCheckboxClickEvent}"
                                @updateTodoEvent="${this.handleUpdateTodoEvent}"
                        >
                        </my-todo>
                    `
                })}
            </ul>
        `;
    }

    getPosts() {
        this.axios
            .get(this.postsLink)
            .then(response => {
                let newTodos = []

                response.data.forEach((item => {
                    newTodos.push({title: item.title, done: item.completed})

                }))

                this.todos = newTodos
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                console.log(this.todos)
            })
    }

    addPost() {
        this.axios
            .post(this.postsLink,
                {
                    title: "foo",
                    completed: false,
                    userId: 1,
                },
                {
                    headers: {
                        "content-type": "form-data/multipart",
                        Autorization: 'Bearer token'
                    }
                }
            )
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleCheckboxClickEvent(event) {
        const id = event.detail.id
        const done = event.detail.done

        let newTodos = [...this.todos]
        newTodos[id].done = done
        this.todos = newTodos
    }

    handleTodoSubmit(event) {
        event.preventDefault()

        const formData = new FormData(event.target)

        this.todos = [...this.todos, {title: formData.get("todoTitle"), done: false}]
    }

    handleUpdateTodoEvent(event) {
        const id    = event.detail.id
        const title = event.detail.title

        let newTodos = [...this.todos]
        newTodos[id].title = title
        this.todos = newTodos
    }
}

customElements.define("my-todos", Todos);
