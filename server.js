const http = require("http");
const app = require("./app");

const hostName = "0.0.0.0";
const portNumber = 3000;

const server = http.createServer(app);

server.listen(portNumber, hostName, () => {
    console.log("\nServer Active!\nListening on port " + portNumber + "...\n");
});