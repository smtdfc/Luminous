import {EditorContext} from '../contexts/editor.js';

export default function(app){
  EditorContext.on("project:start_create",()=>{
    document.getElementById("modals").appendChild(app.renderFragment`
      <h1>Hello</h1>
    `)
  })
}