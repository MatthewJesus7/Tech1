const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');

// Criação do servidor
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 8000;

// Middleware para CORS
server.use(cors());
server.use(middlewares);
server.use(router);

// Início do servidor
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
