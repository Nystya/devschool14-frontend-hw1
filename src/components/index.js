import { Router } from "@vaadin/router";
import "./appMain.js"
import "./destinationsMain.js"
import "./destinationMain.js"

const outlet = document.getElementById('outlet');
const router = new Router(outlet);
router.setRoutes([
  {path: '/',     component: 'main-component'},
  {path: '/index',  component: 'main-component'},
  {
    path: '/destinations',
    children: [
      {path: '/', component: 'main-destinations-component'},
      {path: '/:id', component: 'main-destination-component'},
    ]
  }
]);
