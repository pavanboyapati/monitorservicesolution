/*
  1) This is a basic http server from node.js for this simple requirement
  as we don't have too many routes to handle and in general a good framework like Express,hapi etc..would be 
  nice to have.
  2) It handles route '/api/monitor' to serve monitoring data and
  for anyother route it will serve generic message:
  "Welcome to monitor API. Try 'GET /api/monitor'".
*/

const http = require("http");
const { getData } = require("./src/handleData");
const pollMagnificent = require("./src/poll");

const pollingInterval = process.env.POLL_INTERVAL || 15000;
const monitorUrl = process.env.MONITOR_URL || "http://magnificent:12345";

const requestHandler = (request, response) => {
  //set CORS heahers
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Credentials", "true");
  response.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  response.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  const { url } = request;
  if (url == "/api/monitor") {
    response.end(JSON.stringify(getData()));
  }

  response.end("Welcome to monitor API. Try 'GET /api/monitor'");
};

const port = process.env.PORT || 5000;
const server = http.createServer(requestHandler);
server.listen(port, err => {
  if (err) console.log("something bad happened", err);
  console.log(`server is listening on ${port}`);
  pollMagnificent(monitorUrl, pollingInterval); //Polling gets initialized when server is up
});
