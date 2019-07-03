import React from "react";
import { ColumnChart } from "react-chartkick";
import "chart.js";

const DataTable = props => {
  const { stats } = props;
  const data = [["200", stats.count200], ["500", stats.count500]];
  return (
    <div className="m-2">
      <ColumnChart
        colors={[["green", "red"], ["red", "red"]]}
        width="400px"
        height="200px"
        data={data}
      />
    </div>
  );
};

export default DataTable;
