class Component extends Turtle.TurtleComponent {

  template() {
    return this.html`
      <div class="root container" style="padding-top:5rem; min-height:100vh;" ref="container">
        <div class="text-center" style="padding: 20px;">
          <h1 class="heading-1" style="font-size: 6rem; color: #ff9800;">⚙️</h1>
          <h2 class="heading-2" style="font-size: 2rem; color: #333;">We're Currently Undergoing Maintenance</h2>
          <p style="font-size: 1.2rem; color: #555;">😐 We are working hard to improve our services. Please check back later. We appreciate your patience!</p>
          <p style="font-size: 1rem; color: #888;">Estimated time to completion: <strong>2 hours</strong></p>
          <br/><br/>
          <a href="/" class="btn btn-success" style="margin-top: 50px;">Go Back to Home</a>
        </div>
      </div>
    `
  }
}

export const Page = Turtle.createComponent(Component)