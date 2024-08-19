const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(cors());
server.use(router);

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
