export class LuminousBlock {
  constructor() {
    this.nodes = [];
  }

  moveNode(fromIndex, toIndex) {
    if (
      fromIndex >= 0 && fromIndex < this.nodes.length &&
      toIndex >= 0 && toIndex < this.nodes.length
    ) {
      const [movedNode] = this.nodes.splice(fromIndex, 1);
      this.nodes.splice(toIndex, 0, movedNode);
    } else {

    }
  }

  addNode(node) {
    this.nodes.push(node);
  }

  execute(context) {
    this.nodes.forEach(node => {
      if (node.execute) {
        node.execute(context);
      }
    });
  }
}