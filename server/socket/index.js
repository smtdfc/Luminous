const LogHelper = require("../helper/logger");

const Logger = new LogHelper("socket");
const handlers = []

module.exports = function(fastify) {
  fastify.io.on('connection', (socket) => {
    Logger.info(`Client connected: ${socket.id}`);
    for (let handler of handlers) {
      handler(socket,fastify,socket.id)
    }
    
    socket.on('message', (msg) => {
      Logger.info(`Received message: ${msg}`);
      socket.emit('message', `Echo: ${msg}`);
    });

    socket.on('disconnect', () => {
      Logger.info(`Client disconnected: ${socket.id}`);
    });
  });
}