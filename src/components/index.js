import { Router } from "@vaadin/router";
import "./mainWrapper.js"
import "./appMain.js"
import "./destinationsMain.js"
import "./destinationMain.js"

const outlet = document.getElementById('outlet');
const router = new Router(outlet);
router.setRoutes([
  { path: '/',     component: 'main-wrapper',
    children: [
      {path: '/', component: 'main-component'},
      {path: '/destinations', component: 'main-destinations-component'},
      {path: '/destinations/:id', component: 'main-destination-component'},
    ]
  }
]);
