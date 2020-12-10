import {LitElement, html, css} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

class ArticlePost extends LitElement {
    render() {
        return html`
            <article>
                <picture>
                    <source media="(min-width:800px)" srcset="https://picsum.photos/1920/${this.pictureHeight + this.id}.jpg">
                    <img src="https://picsum.photos/200/112.jpg" alt="Destination_${this.id}">
                </picture>
                <h3>Destination ${this.id}</h3>
                <h4>Destination_${this.id} Subtitle</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis debitis eligendi enim eos error illo
                    in inventore ipsum iste laboriosam maiores maxime nam omnis quas qui quod ratione saepe sint, sit
                    suscipit veniam voluptas voluptatibus voluptatum. A ab accusantium adipisci architecto assumenda aut
                    cumque dolore eius, expedita fuga impedit ipsum, libero modi molestiae natus officia optio placeat quas,
                    sit voluptatibus. Accusamus asperiores corporis delectus facere fugit inventore ipsam, iusto mollitia
                    nisi officiis perferendis provident repudiandae sapiente velit veniam? Fuga incidunt labore odit. Alias
                    aut culpa debitis dolores error et expedita fugiat fugit hic, illum, inventore iusto minima natus
                    necessitatibus numquam officiis omnis optio possimus quam quis ratione sint velit, voluptatum?
                </p>
            </article>
        `;
    }

    static get properties() {
        return {
            id: {type: Number},
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
            max-width: 80%;
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