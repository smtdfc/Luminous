export class Flow {
  constructor(){
    this.nodes = {}
  }
  
  addNode(nodeID,node){
    this.nodes[nodeID] = node
  }
}