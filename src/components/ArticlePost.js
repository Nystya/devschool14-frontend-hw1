import {LitElement, html, css} from "lit-element";

class ArticlePost extends LitElement {
    render() {
        return html`
            <article>
                <picture>
                    ${this.sources.map((source) => {
                        return html`
                            <source media="(min-width:800px)" srcset="${source}">
                        `;
                    })}
                    <img src="${this.sources[this.sources.length-1]}" alt="Destination_${this.id}">
                </picture>
                <h3>${this.title}</h3>
                <h4>${this.subtitle}</h4>
                <p>${this.description}</p>
            </article>
        `;
    }

    static get properties() {
        return {
            id: {type: String},
            title: {type: String},
            subtitle: {type: String},
            description: {type: String},
            sources: {type: Array}
        }
    }

    constructor() {
        super();

        this.pictureHeight = 1079;
    }

    static get styles() {
        return css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          h3 {
            font-size: 4rem;
          }

          h4 {
            font-size: 3rem;
          }

          p {
            font-family: 'Open Sans', sans-serif;
            font-size: 2.2rem;
          }

          article {
            display: block;
            min-height: 25rem;
            max-width: 75%;
            margin: auto;
            padding: 5rem 0;
          }

          article h3, article h4, article p {
            display: block;
            position: relative;
            text-align: left;
          }

          article img {
            width: 100%;
          }
        `;
    }
}

export default customElements.define('article-post', ArticlePost);