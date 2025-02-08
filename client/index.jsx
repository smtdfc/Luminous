import {RumiousApp} from "rumious";
import {FlowEdit} from './components/FlowEdit.jsx';
import "./styles/main.css"
const app = new RumiousApp(document.getElementById("root"));
app.render(
  <>
  
  
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" media="all" />
    <FlowEdit/>
  </>
 )