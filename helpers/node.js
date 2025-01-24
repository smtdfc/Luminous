export class Node{
  constructor(module="",name=""){
    this.module = module
    this.name = name
    this.args = {}
  }
  
  addArg(name,arg){
    this.args[name] = arg
  }
  
  setArg(name,value){
    this.args[name].set(value)
  }
}