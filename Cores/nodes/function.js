export class LuminousFunctionNode extends LuminousNode {
  constructor(fnDeclaration) {
    super()
    this.functionDeclaration = fnDeclaration
    this.type = "LuminousNode::Function"
    this.nodeDescription = fnDeclaration.description
    this.args = fnDeclaration.args
    this.name = fnDeclaration.functionDisplayName
    this.subname = fnDeclaration.classes
  }
}