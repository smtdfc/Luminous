import {Flow} from './flow.js';

export class Argument{
  constructor(node,type,name){
    this.node = node
    this.type = null 
    this.name = name 
    this.value = ""
    this.flow = new Flow()
  }
  
  set(value){
    this.value = value
  }
}