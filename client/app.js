import {initRouter} from './router/index.js';
const app = new Turtle.createApp(document.getElementById("root"))


function initApp(){
  app.renderFragment`
    <${Turtle.Lazy(async ()=>{return (await import("./components/Navbar.js")).Navbar})}/>
    <div class="" id="contents" />
    <div class="overlay " id="overlay">
      <div class="line-loader"/>
    </div>
  `
  initRouter(app)
}

initApp()