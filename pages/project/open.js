import { ProjectManagerAPI } from "../../apis/project.js";

export const Page = Turtle.createComponent({
  onInit() {
    
  },

  onRender() {
    ProjectManagerAPI.all()
      .then((list)=>{
        console.log(list)
      })
  },

  template() {
    return this.html`
      <div class="root fade-in container" style="padding-top:8rem; min-height:100vh;" ref="container">
        <div class="d-flex align-items-center px-3">
          <a href="#!/" class="material-symbols-outlined btn-icon">arrow_back</a>
          <div class="ml-3 d-flex flex-col">
            <h2 class="m-0">Open project</h2>
          </div>
        </div>
        
        <div class="mt-5 mx-4">
          <ul class="list list-hover" t-ref="list">
            <li></li>
          </ul>
        </div>
      </div>

    `;
  }
});