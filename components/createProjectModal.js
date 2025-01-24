export const CreateProjectModal = Turtle.createComponent({
  
  onCreate(){
    let [forwardRef] = this.props 
    forwardRef.open = ()=>{
      new TurtleUI.TurtleUIModal(this.refs.modal).open()
    }
  },
  
  template (){
    return this.html`
      <div class="modal " ref="modal" >
        <div class="modal-contents" style="height:10px!important;">
          <div class="modal-header">
            <h3 class="modal-title">Create project</h3>
            <button class="modal-toggle-btn btn-icon material-symbols-outlined">close</button>
          </div>
          <div class="modal-body" style="height:150px!important;" >
            <h4 class="m-2">Name of project</h4>
            <input class="form-input" style="width:100%" />
            <button class="mt-3 btn btn-primary ml-auto" >Create</button>
          </div>
        </div>
      </div>
    `
  }
})