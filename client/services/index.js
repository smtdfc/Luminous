import ProjectManagerService from './projectManager.js';

const services=[
  ProjectManagerService
]

export function init(app){
  for (let service of services) {
    service(app)
  }
}