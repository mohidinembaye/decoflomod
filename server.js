// api/server.js
const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();

// Force la résolution du chemin absolu pour db.json
const router = jsonServer.router(path.join(__dirname, '../db.json')); 
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Réécriture indispensable pour nettoyer l'URL avant traitement par le routeur
server.use(jsonServer.rewriter({
  '/api/*': '/$1'
}));

server.use(router);

module.exports = server;
