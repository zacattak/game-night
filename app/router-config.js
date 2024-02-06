// import { ExamplesController } from "./controllers/ExamplesController.js";
import { HomeController } from "./controllers/HomeController.js";
import { PlayersController } from "./controllers/PlayersController.js"
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [HomeController, PlayersController],
    // view: /*html*/`
    // <div class="bg-white p-3">
    //   <div class="card-body">
    //     <p>Home Page</p>
    //     <button class="btn btn-dark" onclick="app.HomeController.testButton()">😎</button>
    //   </div>
    // </div>
    view: ''
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])