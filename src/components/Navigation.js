import {LitElement, html, css} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

class Navigation extends LitElement {
    render() {
        return html`
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <div class="nav-container">
                <h1 id="logo">ING Tech Travel</h1>
                
                <!-- I tried using classMap but it didn't work for some reason -->
                <nav class=${this.classes.responsive}>
                    <a href="javascript:void(0);" class="icon" @click="${this.handleMenuToggle}">
                        <i class="fa fa-bars"></i>
                    </a>
                    <a href="index.html">Home</a>
                    <a href="destinations.html">Destinations</a>
                    <a href="#">Language</a>
                </nav>
            </div>
        `;
    }

    static get properties() {
        return {
            classes: {type: Object}
        }
    }

    constructor() {
        super();

        this.classes = {responsive: ""}
    }

    handleMenuToggle() {
        let oldClasses = {...this.classes};

        if (oldClasses.responsive === "") {
            oldClasses.responsive = "responsive"
        } else {
            oldClasses.responsive = ""
        }

        this.classes = oldClasses
    }

    static get styles() {
        return css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          h1 {
            font-size: 2.5rem;
            color: white;
          }

          a {
            color: white;
            min-height: 2.5rem;
            font-size: 2.5rem;
            font-weight: lighter;
            text-decoration: none;
          }

          .icon {
            min-height: 3.1rem;
            font-size: 3.1rem;
          }
          
          .nav-container {
            width: 80%;
            margin: auto;
            padding: 1.5rem 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          
          .nav-container nav {
            display: flex;
            justify-content: space-evenly;
            flex: 2;
          }
          
          .nav-container nav .icon {
            display: none;
          }
          
          .nav-container #logo {
            flex: 3;
          }

          @media screen and (max-width: 1200px) {
            .nav-container nav {
              justify-content: flex-end;
            }

            .nav-container nav a {
              display: none;
            }

            .nav-container nav a.icon {
              display: flex;
            }
          }

          @media screen and (max-width: 1200px) {
            .nav-container nav.responsive {
              display: flex;
              flex-direction: column;
            }

            .nav-container nav.responsive a {
              display: block;
              text-align: right;
              padding-bottom: 1rem;
            }
          }

          @media screen and (max-width: 1200px) {
            .nav-container {
              display: flex;
              align-items: flex-start;
            }
          }
        `;
    }
}

customElements.define('app-navigation', Navigation);