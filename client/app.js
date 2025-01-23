import {FlowEdit} from './components/flowEdit.js';

const app = Turtle.createApp(document.getElementById("root"))


function main(){
  app.renderFragment`
    <${FlowEdit}/>
  `
}

main()