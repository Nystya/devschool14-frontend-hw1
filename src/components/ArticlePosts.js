import {LitElement, html, css} from "lit-element";
import "./ArticlePost.js";

const axios = require('axios').default

const baseURL = 'https://devschool-2020.firebaseio.com/vajaiala-catalin/'
class ArticlePosts extends LitElement {
    render() {
        return html`
            <section>
                ${this.articlePosts.map((articlePost) => {
                    return html`
                        <article-post 
                            .id="${articlePost.id}"
                            .title="${articlePost.value.title}"
                            .subtitle="${articlePost.value.subtitle}"
                            .description="${articlePost.value.description}"
                            .sources=${articlePost.value.sources}
                        >
                        </article-post>
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

        this.axios = axios.create({
            baseURL: baseURL,
            timeout: 10000,
        });

        this.articlePosts = []
    }

    connectedCallback() {
        super.connectedCallback();

        this.getArticles();
    }

    async getArticles() {
        const axios = this.axios;

        axios.get('articles.json')
        .then((result) => {
            // result.data is a map of article objects
            const articles = result.data;

            this.articlePosts = Object.keys(articles).map((articleId) => {
                return {
                    id: articleId,
                    value: articles[articleId]
                }
            }).reverse()
        }).catch((err) => {
            console.log(err);
        });
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

export default customElements.define('article-posts-section', ArticlePosts);