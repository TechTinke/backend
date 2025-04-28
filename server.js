const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Add this route to handle the root path
server.get("/", (req, res) => {
  res.send("Welcome to JSON Server!");
});

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
