import {RumiousApp} from "rumious";
import {FlowEdit} from './components/FlowEditor.jsx';

const app = new RumiousApp(document.getElementById("root"));
app.render(
  <>
    <h1>Hello</h1>
    <FlowEdit/>
  </>
 )