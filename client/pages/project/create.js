
export const Page = Turtle.createComponent({
  onInit() {
    this.createProjModalRef={}
  },

  
  template() {
    return this.html`
      <div class="root fade-in container" style="padding-top:8rem; min-height:100vh;" ref="container">
        <div class="d-flex align-items-center px-3">
          <a href="#!/" class="material-symbols-outlined btn-icon">arrow_back</a>
          <div class="ml-3 d-flex flex-col">
            <h3 class="m-0">Create new project</h3>
          </div>
        </div>
        
        <div class="mt-5 mx-4">
          <div class="form-group">
            <label class="form-label">Project name:</label>
            <input t-model="nameInput" type="text" class="form-input" />
          </div>
          <button  class="btn btn-primary">Create</button>
        </div>
      </div>

    `;
  }
});