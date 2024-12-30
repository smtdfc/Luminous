const Fastify = require('fastify');
const fastifySocketIO = require('fastify-socketio');

const app = Fastify();

app.register(fastifySocketIO, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

app.ready().then(() => {
  app.io.on('connection', (socket) => {
    socket.on('message', (msg) => {
      socket.emit('message', msg);
    });

    socket.on('disconnect', () => {});
  });
});

app.listen(3000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});