export class ModuleDeclartion {
  constructor(name) {
    this.name = name;
    this.functions = {}; 
    this.constants = {}; 
  }

  addFunction(name,func) {
    if (func instanceof FunctionDeclartion) {
      this.functions[name] = func
    } else {
      throw new Error("Invalid function declaration");
    }
  }

  addConstant(key, value) {
    this.constants[key] = value;
  }

  toJSON() {
    return JSON.stringify({
      name: this.name,
      functions: this.functions.map((func) => func.toJSON()),
      constants: this.constants
    });
  }
}

export class FunctionDeclartion {
  constructor(configs) {
    this.name = configs.name;
    this.args = configs.args || [];
  }

  toJSON() {
    return {
      name: this.name,
      args: this.args
    };
  }
}