const fastify = require("fastify");
const LogHelper = require("./helper/logger");
const routesSetup = require("./routes");
const socketSetup = require("./socket");
const path = require("path");
const ServerConfiguration = require("./configs/server.js")

const Logger = new LogHelper("server");

const SERVER_EVENTS = {
  prepare: async function() {
    Logger.info("Initializing models and external services...");

  },
  start: function(fastify) {
    Logger.success("Server started successfully.");
    Logger.info(`Server is running at ${fastify.server.address().port}`);
  },
  error: function(err) {
    Logger.error(`Server encountered an error: ${err.message}`);
  },
};

module.exports = async function initServer() {
  try {
    Logger.info("Preparing server...");
    await SERVER_EVENTS.prepare();

    const app = fastify();

    app.register(require("@fastify/cors"), {
      origin: (origin, cb) => cb(null, true),
      credentials: true,
    });

    app.register(require("@fastify/formbody"));

    app.register(require("@fastify/view"), {
      engine: { ejs: require("ejs") },
      root: path.join(__dirname, "../public/views"),
    });

    app.register(require("@fastify/static"), {
      root: path.join(__dirname, "../public/assets"),
      prefix: "/public/assets",
      decorateReply: false,
    });

    app.register(require("@fastify/static"), {
      root: path.join(__dirname, "../public/bundles"),
      prefix: "/public/bundles",
      decorateReply: false,
    });

    app.register(require("@fastify/cookie"), {
      secret: process.env.COOKIE_SECRET,
      parseOptions: {},
    });

    app.register(require('fastify-socket.io'), {
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
    });
    routesSetup(app);

    Logger.info("Starting server...");
    await app.listen({ port: ServerConfiguration.SERVER_PORT });
    
    socketSetup(app)
    SERVER_EVENTS.start(app);
  } catch (err) {
    SERVER_EVENTS.error(err);
    Logger.error("Server cannot be started.");
    process.exit(1);
  }
};