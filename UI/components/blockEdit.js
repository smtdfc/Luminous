import {functionNodeFragment} from '../fragments/functionNode.js';

export const LuminousUIBlockEditor = Turtle.createComponent(class extends Turtle.TurtleComponent {

  onInit() {
    let [rootBlock,context] = this.props
    this.block = rootBlock
    this.context = context
  }

  onRender() {
    this.sortable = new Sortable(this.refs.editor, {
      animation: 1000,
      ghostClass: "sortable-ghost",
      forceFallback: true,
      fallbackOnBody: true,
      swapThreshold: 0.5,
      onEnd: (evt) => {
        let newIndex = evt.newIndex
        let oldIndex = evt.oldIndex
        this.block.moveNode(oldIndex, newIndex)
      }
    });

  }

  addNode(node) {
    this.block.addNode(node)
    switch (node.type) {
      case 'LuminousNode::Function':
        this.refs.editor.appendChild(functionNodeFragment(this,node))
        break;
      
      default:
        HTMLDialogElement
    }
    
  }

  template() {
    return this.html`
      <ul class="block" t-ref="editor"></ul>
     `
  }
})
