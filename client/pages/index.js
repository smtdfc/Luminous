class Component extends Turtle.TurtleComponent {

  template() {
    return this.html`
      <div class="root container" style="padding-top:5rem; min-height:100vh;" ref="container">
        <h1>Hello Luminous</h1>
      </div>
    `
  }
}

export const Page = Turtle.createComponent(Component)