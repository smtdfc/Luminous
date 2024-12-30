const fastify = require('fastify')({ logger: true });
const fastifyIO = require('fastify-socket.io');

fastify.register(fastifyIO);


fastify.get('/', async (request, reply) => {
  reply.send({ message: 'Socket.IO server is running!' });
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    fastify.log.info(`Server is running at http://localhost:3000`);


    fastify.io.on('connection', (socket) => {
      fastify.log.info(`Client connected: ${socket.id}`);


      socket.on('message', (msg) => {
        fastify.log.info(`Received message: ${msg}`);
        socket.emit('message', `Echo: ${msg}`);
      });

      socket.on('disconnect', () => {
        fastify.log.info(`Client disconnected: ${socket.id}`);
      });
    });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();