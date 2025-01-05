import {LuminousUIBlockEditor} from './components/blockEdit.js';
import {LuminousBlock} from '../../Cores/block.js';

export function initApp() {
  const app = Turtle.createApp(document.getElementById("root"))

  app.renderFragment`
  <${LuminousUIBlockEditor(new LuminousBlock([
    
  ]))}/>
`
}