import {LuminousUINodeArgsEdit} from '../components/argsEdit.js';


export function functionNodeFragment(context, node) {
  return context.html`
      <li class="node" t-group-item="a" >
          <div class="node-title">
            <span class="node-name">${node.name}</span>
            <span class="node-subname">${node.subname}</span>
          </div>
          <${LuminousUINodeArgsEdit(node,node.args)}/>
       </li>
    `
}