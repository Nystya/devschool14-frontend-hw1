import {LitElement, html, css} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

class Destination extends LitElement {
    render() {
        return html`
            <article>
                <picture>
                    <!-- Hack to force picsum to return different images by using different heights -->
                    <source srcset="https://picsum.photos/750/${this.pictureHeight + this.id}.jpg">
                    <img src="https://picsum.photos/200/112.jpg" alt="Destination_1">
                </picture>
                <h3>Destination ${this.id}</h3>
                <h4>Destination_${this.id} Subtitle</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet aperiam asperiores commodi
                    ea eaque et explicabo fuga ipsa, ipsam ipsum itaque maxime neque numquam odit quae recusandae
                    reiciendis ut.
                </p>
                <a href="">More Details</a>
            </article>
        `;
    }

    static get properties() {
        return {
            id: {type: Number},
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
            font-size: 2.2rem;
          }

          a {
            color: white;
            min-height: 2.5rem;
            font-size: 2.5rem;
            font-weight: lighter;
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