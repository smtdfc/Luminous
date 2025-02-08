import {RumiousComponent} from 'rumious';

export class FlowEdit extends RumiousComponent{
  static tag="flow-edit";
  constructor(){
    super();
  }
 
  template(){
    return(
      <>
        <div class="d-flex align-items-center justify-content-center">
          <button class="btn btn-icon material-symbols-outlined">add</button>
        </div>
      </>
    );
  }
}