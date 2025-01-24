
export const Page = Turtle.createComponent({
  onInit() {
    this.createProjModalRef={}
  },

  
  template() {
    return this.html`
      <div class="editor-container" style="display: flex; align-items: center; justify-content: center; height: 100vh; background: white; color: black; font-size: 1.2rem;">
        <span>Click here to create new flow or press Ctrl + N</span>
      </div>
    `;
  }
});