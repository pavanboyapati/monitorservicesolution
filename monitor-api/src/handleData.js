/*
  exports:
    1) saveData(): will be called to save monitoring data from 
                  polling service.

    2) getData(): will be called to respond api call "/api/monitor"
                  and it will return records with timstamp under last 5
                  minutes.
  Environment variables:
    1) DATA_JSON_URL(default="/usr/app/monitor-api/data.json")
*/
const fs = require("fs");
const dataJsonUrl =
  process.env.DATA_JSON_URL || "/usr/app/monitor-api/data.json";

const saveData = data => {
  fs.readFile(dataJsonUrl, (error, obj) => {
    if (error) console.log("error reading while pushing data " + error);
    let existingData = obj ? JSON.parse(obj) : [];
    existingData.splice(0, 0, data);
    fs.writeFile(dataJsonUrl, JSON.stringify(existingData), error => {
      if (error) console.log("Error while writing " + error);
    });
  });
};

const getData = (interval = "5") => {
  try {
    if (require.cache[dataJsonUrl]) {
      delete require.cache[dataJsonUrl];
    }
    const data = require(dataJsonUrl);
    // console.log(data);
    let result = [];
    if (interval == "5") {
      for (let d of data) {
        const now = new Date();
        const diffInMillis = now.getTime() - new Date(d.timestamp).getTime();
        const period = 5 * 60 * 1000;
        if (diffInMillis > period) {
          break;
        }
        // console.log("get data" + d);
        result.push(d);
      }
      return result;
    } else {
      return data;
    }
  } catch (e) {
    console.log("error " + e);
    return [];
  }
};
module.exports = { saveData, getData };
