import React, { Component } from "react";

import DataTable from "./components/dataTable";
import ColumnChart from "./components/columnChart";
import getMonitoringData from "./services/getMonitoringData";

import "./App.css";

class App extends Component {
  state = {
    stats: {}
  };
  pollingInterval = 0;
  componentDidMount() {
    this.getStats();
  }
  getStats() {
    console.log("getstatsl");

    setTimeout(async () => {
      const stats = await getMonitoringData();
      this.setState({ stats });
      this.pollingInterval = 10000;
      this.getStats();
    }, this.pollingInterval);
  }
  render() {
    return (
      <div>
        <h1 className="m-2">Magnificent Service Monitoring</h1>
        <div className="m-2">
          <b>Note: </b>Get Refreshed every 10 seconds and will retreive data for
          last 5 minutes.
        </div>
        <DataTable stats={this.state.stats} />
        <ColumnChart stats={this.state.stats} />
      </div>
    );
  }
}

export default App;
