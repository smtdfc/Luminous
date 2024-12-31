import {Cofiguration} from '../configs/app.js';

class Component extends Turtle.TurtleComponent {
  template() {
    return this.html`
      <nav class="navbar backdrop-blur fade-in-down bg-transparent " id="navbar" >
        <div class="navbar-header">
          <button data-taction="navbar:toggle:#navbar" class="navbar-toggle-btn btn-icon material-symbols-outlined">menu</button>
          <h3 class="navbar-title">${Cofiguration.APP_NAME}</h3>
        </div>
        <!--
        <div class="navbar-menu ml-auto">
          <button data-taction="navbar:toggle:#navbar" class="navbar-toggle-btn btn-icon material-symbols-outlined">close</button>
          <ul>
            <li><a href="#!/">Home</a></li>
            <li><a href="#!/">Tools</a></li>
            <li><a href="#!/">Products</a></li>
            <li><a href="#!/">Report</a></li>
            <li><a href="#!/">About</a></li>
          </ul>
        </div>
        -->
        <div class="navbar-items">
          <button class=" btn-icon material-symbols-outlined">notifications</button>
        </div>
      </nav>
    `
  }
}

export const Navbar = Turtle.createComponent(Component)