import axios from "axios";

const getMonitoringData = async () => {
  try {
    const { data } = await axios.get("http://localhost:5000/api/monitor");
    console.log("monitor api");
    console.log(data);
    const stats = { count200: 0, count500: 0 };
    for (let d of data) {
      if (d.statusCode === 200) {
        stats.count200++;
      } else if (d.statusCode === 500) {
        stats.count500++;
      } else {
        stats.countOther = stats.countOther ? stats.countOther++ : 1;
      }
    }
    return stats;
  } catch (e) {
    console.log("error getting data" + e);
    return {};
  }
};

export default getMonitoringData;
