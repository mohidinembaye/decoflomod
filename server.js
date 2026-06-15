const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();

// Puisque db.json est dans le même dossier que server.js :
const router = jsonServer.router(path.join(__dirname, 'db.json')); 
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Nettoie le préfixe /api avant que json-server ne lise la route
server.use(jsonServer.rewriter({
  '/api/*': '/$1'
}));

server.use(router);

module.exports = server;