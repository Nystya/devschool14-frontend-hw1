import {LitElement, html, css} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";
import ArticlePost from "./ArticlePost.js";

class ArticlePosts extends LitElement {
    render() {
        return html`
            <section>
                ${this.articlePosts.map((articlePost, id) => {
                    return html`
                        <article-post .id="${id + 1}"></article-post>
                    `;
                })}
            </section>
        `;
    }

    static get properties() {
        return {
            articlePosts: {type: Array}
        }
    }

    constructor() {
        super();

        this.articlePosts = [{}, {}, {}]
    }

    static get styles() {
        return css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          section {
            display: block;
            margin: auto;
            text-align: center;
            justify-content: center;
            padding: 5rem 0;
          }
        `;
    }
}

customElements.define('article-posts-section', ArticlePosts);