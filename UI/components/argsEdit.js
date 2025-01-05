export const LuminousUINodeArgsEdit = Turtle.createComponent(class extends Turtle.TurtleComponent {
  onInit() {
    let [node, args] = this.props;
    this.node = node
    this.args = args
  }

  onArgSelect(event, ) {
    let target = event.target
    let argName = target.dataset.arg
    let argInputType = target.dataset.input ?? "value"
    let currentValue = this.node.data[argName]
    if (argInputType == "value") {
      let inputElement = document.createElement("input")
      inputElement.className = "node-arg-edit"
      inputElement.value = currentValue
      inputElement.onkeydown = (event) => {
        if (event.key == "Enter") {
          target.textContent = inputElement.value
          this.node.data[argName] = inputElement.value
        }
      }
      inputElement.onblur = () => {
        target.textContent = inputElement.value
        this.node.data[argName] = inputElement.value
      }
      target.textContent = ""
      target.appendChild(inputElement)
    }
  }

  addArg(arg) {
    let fragment = this.html`
      <span class="node-arg">
        <span class="node-arg-name">+ ${arg.name}:</span>
        <span data-arg="${arg.name}" t-events="click:onArgSelect" class="node-arg-value">${this.node.data[arg.name] ?? "N/A"}</span>
      </span>
    `
    this.refs.editor.appendChild(fragment)
  }

  onRender() {
    this.args.forEach(arg => this.addArg(arg))
  }

  template() {
    return this.html`
      <div class="node-args" t-ref="editor"></div>
    `;
  }

})
