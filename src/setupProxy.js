const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/rest", { target: "http://localhost:9500/" }));
  app.use(proxy("/graphql", { target: "http://localhost:6000/" }));
};
