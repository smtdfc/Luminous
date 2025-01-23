
export const Navbar = Turtle.createComponent({
  states: {
    isAuthed: true,
    userAvatar: "",
  },

  onInit: function() {
  },

  template: function() {
    return this.html`
     <div class="navbar backdrop-blur fade-in-down bg-transparent flex-col " id="navbar" >
      <nav class="d-flex justify-content-sb" style="width:100%"  >
        <div class="navbar-header">
          <button t-show="isAuthed" data-taction="navbar:toggle:#navbar" class="navbar-toggle-btn btn-icon material-symbols-outlined">menu</button>
          <h3 class="navbar-title">Luminous</h3>
        </div>
        <div class="navbar-items">
          <button class=" btn-icon material-symbols-outlined">notifications</button>
          <img t-binds="src:userAvatar" data-taction="offcanvas:toggle:#main-offcanvas" class="fade avatar avatar-sm" src="/static/images/avatar/avatar.jpg"/>
        </div>
      </nav>
        <ul class="d-flex px-3"   style="width:100%;column-gap:30px;list-style:none;">
          <li>Files</li>
          <li>Edit</li>
          <li>Run</li>
          <li>Tools</li>
          <li>Project</li>
          <li>Help</li>
        </ul>
      </div>
    
    `
  },
})