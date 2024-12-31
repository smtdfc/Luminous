const routes = [
  require("./view.routes.js")
]

module.exports = function(fastify){
  for (let route of routes) {
   route(fastify)
  }
}