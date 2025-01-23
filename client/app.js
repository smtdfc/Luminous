import {FlowEdit} from './components/flowEdit.js';
import { initRouter } from './router/index.js';

const app = Turtle.createApp(document.getElementById("root"))


function main(){
  app.renderFragment`
    <${Turtle.Lazy(async ()=>{return (await import("./components/navbar.js")).Navbar})}/>
    <div class="overlay active" style="height:100vh;z-index:10000;"  id="overlay">
      <div class="line-loader"/>
    </div>
    <div class="" id="contents" />
  `
  initRouter(app)
}

main()