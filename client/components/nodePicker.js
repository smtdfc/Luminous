import { EditorContext } from '../contexts/editor.js';

export const NodePicker = Turtle.createComponent({

  onCreate() {
    this.editor = EditorContext.values;
    this.forwardRefs = this.props[0];
    this.forwardRefs.open = () => this.offcanvas.open();
    this.selected = null;
  },

  onCancel() {
    this.offcanvas.close();
    setTimeout(() => this.destroy(), 300);
  },

  addModule(declaration) {
    const details = this.html`
      <details class="p-3">
        <summary class="d-flex align-items-center">
          <i class="material-symbols-outlined">package_2</i>
          <span>${declaration.name}</span>
        </summary>
        <ul class="list list-hover" t-ref="${this.id(declaration.name)}"></ul>
      </details>
    `;
    this.refs.list.appendChild(details);
    this.addNodes(declaration);
  },

  addNodes({ name, functions }) {
    const container = this.refs[this.id(name)];
    Object.keys(functions).forEach(node => {
      container.appendChild(this.html`
        <li class="d-flex align-items-center" data-pkg="${name}" data-node="${node}" t-events="click:onItemSelect">
          <i class="material-symbols-outlined">function</i>
          <span>${node}</span>
        </li>
      `);
    });
  },

  onItemSelect(e) {
    let { pkg, node } = e.target.dataset
    this.forwardRefs.onSelect(
      this.editor.modules[pkg].functions[node],
      this.editor.modules[pkg]
    )
    this.onCancel()
  },

  onRender() {
    this.offcanvas = new TurtleUI.TurtleUIOffcanvas(this.refs.offcanvas);
    Object.entries(this.editor.modules).forEach(([key, value]) => {
      this.addModule(value);
    });

    this.forwardRefs.onReady();
  },

  template() {
    return this.html`
      <div class="offcanvas" t-ref="offcanvas">
        <div class="offcanvas-header">
          <h3 class="offcanvas-title">Nodes</h3>
          <button class="btn-icon material-symbols-outlined" t-events="click:onCancel">close</button>
        </div>
        <div class="offcanvas-body p-3" t-ref="list"></div>
      </div>
    `;
  }
});