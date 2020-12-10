import {LitElement, html, css} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

class Destination extends LitElement {
    render() {
        return html`
            <article>
                <picture>
                    ${this.sources.map((source) => {
						return html`
							<source srcset="${source}">
						`;
                    })}
                    <img src="${this.sources[this.sources.length-1]}" alt="${this.title} Photo">
                </picture>
                <h3>${this.title}</h3>
                <h4>${this.subtitle}</h4>
                <p>${this.description}</p>
                <a href="${this.more}">More Details</a>
            </article>
        `;
    }

    static get properties() {
        return {
            id: {type: String},
            title: {type: String},
            subtitle: {type: String},
            description: {type: String},
            sources: {type: Array},
            more: {type: String}
        };
    }

    constructor() {
		super();

        this.pictureHeight = 420;
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
            font-size: 1.7rem;
          }

          a {
            color: white;
            min-height: 2.5rem;
            font-size: 2.5rem;
            font-weight: bold;
            text-decoration: none;
          }

          article {
            display: block;
            min-height: 25rem;
            max-width: 80%;
            padding: 5rem 0;
            margin: auto auto 5%;
            text-align: left;
          }
          
          article h3 {
            padding: 1.5rem 1.5rem 0.2rem 0;
          }

          article h4 {
            padding: 0.5rem 0.5rem 1rem 0;
          }

          article p {
            margin-bottom: 1rem;
          }

          article a {
            color: black;
            font-size: 1.6rem;
          }

          article img {
            width: 100%;
          }
        `;
    }
}

export default customElements.define('article-destination', Destination);