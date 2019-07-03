/*
Polling function 'pollMagnificent' will be initialized 
when this monitor-api app gets started in index.js
Environment variables used(optional):
  1) MONITOR_URL(default="http://magnificent:12345")
  2) POLL_INTERVAL(default=15000)
*/
const request = require("request");
const { saveData } = require("./handleData");
const pollingInterval = process.env.POLL_INTERVAL || 15000;
const monitorUrl = process.env.MONITOR_URL || "http://magnificent:12345";

const pollMagnificent = () => {
  setTimeout(() => {
    request(monitorUrl, function(error, response, body) {
      const data = {};
      if (error) {
        data.statusCode = "error";
        console.log("error:", error); // Print the error if one occurred
      }

      data.statusCode = response && response.statusCode;
      data.timestamp = new Date();
      // console.log(data);
      saveData(data);
      pollMagnificent();
    });
  }, pollingInterval);
};

module.exports = pollMagnificent;
