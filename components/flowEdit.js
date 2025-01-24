import { NodePicker } from './nodePicker.js';
import { Node } from '../helpers/node.js';
import { Argument } from '../helpers/argument.js';
import { Flow } from '../helpers/flow.js';

export const FlowEdit = Turtle.createComponent({
  onCreate() {
    this.flows = {
      [this.id("root")]: new Flow()
    }
  },

  addArgNode(argsDeclaration, flowID, nodeID) {
    let node = this.flows[flowID].nodes[nodeID]
    return argsDeclaration
      .map((arg) => {
        if (arg.type != "BLOCK") {
          node.addArg(arg.name, new Argument(
            node,
            arg.type,
            arg.name,
          ))
          return `
          <span class="node-arg">
            <span>${arg.displayName ?? arg.name}</span>
            <span data-arg="${arg.name}"  data-node="${nodeID}" data-flow="${flowID}"  class="editable">${arg.defaultValue ?? ""}</span>
          </span>
        `;
        } else {
          let key = Math.random() * 999999999999
          let arg_ = new Argument(
            node,
            arg.type,
            arg.name,
          )
          this.flows[this.id(key)] = arg_.flow
          node.addArg(arg_.name, arg_)
          return `
          <span class="node-arg flows">
            <span class="node-arg " style="width:100%;">
              <span>${arg.displayName ?? arg.name}</span>
              <span data-arg="${arg.name}" data-node="${nodeID}" data-flow="${flowID}"  class="editable">${arg.defaultValue ?? ""}</span>
            </span>
            <div class="flows" t-ref="flow" id="${this.id(key)}" ></div>
            <div class="d-flex align-items-center justify-content-center">
              <button data-root="${this.id(key)}" class="btn-icon material-symbols-outlined" t-events="click:onAddBtnClick">add</button>
            </div>
          </span>
        `;
        }
      })
      .join('');
  },

  addNode(root, module, flowID, nodeDeclaration) {
    let nodeID = Math.floor(Math.random() * 999999 * Date.now()).toString(32)
    let node = new Node(
      module,
      nodeDeclaration.name
    )

    this.flows[flowID].addNode(nodeID, node)
    root.appendChild(this.html`
      <span class="node">
          <span class="node-header" style="position:sticky"><i class="material-symbols-outlined">${nodeDeclaration.nodeType=="function"? "function" : "flowchart"}</i>${nodeDeclaration.displayName ?? nodeDeclaration.name}</span>
          <span class="node-body">${this.addArgNode(nodeDeclaration.args,flowID,nodeID)}</span>
      </span>
      <svg width="100" height="51">
          <defs>
              <marker id="modern-arrow" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
                  <path d="M 0 0 L 12 6 L 0 12 L 3 6 Z" fill="gray" stroke="gray" stroke-width="1" />
              </marker>
          </defs>
          <line x1="50" y1="10" x2="50" y2="40" stroke="gray" stroke-width="2" marker-end="url(#modern-arrow)" />
      </svg>
    `);
  },

  onAddBtnClick(e) {
    let flowID = e.target.dataset.root
    let root = document.getElementById(flowID)
    this.nodePickerRef = {
      onReady: () => {
        this.nodePickerRef.open();
      },

      onSelect: (node, module) => {
        this.addNode(root, module, flowID, node);
      },
    };

    this.refs.panels.appendChild(
      this.html`
        <${NodePicker(this.nodePickerRef)} t-ref="node"/>
      `
    );
  },

  onFlowClick({ target }) {
    if (target.classList.contains("editable")) {
      let argName = target.dataset.arg
      let nodeID = target.dataset.node
      let flowID = target.dataset.flow
      let node = this.flows[flowID].nodes[nodeID]
      let currentValue = target.innerHTML;
      target.innerHTML = `<input class="form-input p-3" style="padding:0.5rem" />`;
      let inputElement = target.querySelector("input");
      inputElement.value = currentValue;
      inputElement.addEventListener("blur", () => {
        setTimeout(() => {
          target.textContent = inputElement.value;
          node.setArg(argName, inputElement.value);
        }, 100)
      });

      inputElement.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          target.textContent = inputElement.value;
          node.setArg(argName, inputElement.value);
        }
      });
    }
  },

  template() {
    return this.html`
    <style>
      .flows {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.8rem;
      }

      .node {
        padding: 0.5rem;
        border: solid 1.5px rgba(0, 0, 0, 0.09);
        border-radius: 5px;
        min-width: 300px;
        display: flex;
        flex-flow: column;
        box-sizing: border-box;
        margin-top: 0.5rem;
      }

      .node-title{
        display:flex;
        align-items:center;
      }
      
      .node-header {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 0.3rem;
        border-bottom: solid 1.5px rgba(0, 0, 0, 0.09);
        position: -webkit-sticky; 
        position: sticky;
        top: 0; 
        background-color: white; 
        z-index: 10; 
        width: 100%;
      }

      .node-body {
        padding: 0.6rem;
      }

      .node-arg {
        margin-top: 3px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .node-arg.flows {
        flex-flow: column;
        padding: 0;
      }
    </style>
    <div t-events="click:onFlowClick" class="flows" t-ref="flow" id="${this.id("root")}">Root</div>
    <div class="d-flex align-items-center justify-content-center">
      <button data-root="${this.id("root")}" class="btn-icon material-symbols-outlined" t-events="click:onAddBtnClick">add</button>
    </div>
    <div t-ref="panels"></div>
  `;
  }
});