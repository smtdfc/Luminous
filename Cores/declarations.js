export class LuminousFunctionDeclaration {
  constructor(declaration) {
    this.functionName = declaration.name ?? "unname"
    this.functionDisplayName = declaration.displayName ?? declaration.name
    this.classes = declaration.classes ?? "Function::external"
    this.description = declaration.description ?? ""
    this.args = declaration.args ?? {}
  }
}