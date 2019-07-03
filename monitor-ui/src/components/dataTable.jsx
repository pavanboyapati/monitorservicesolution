import React from "react";

const DataTable = props => {
  const { stats } = props;
  return (
    <table className="m-2">
      <thead>
        <tr>
          <th className="c-200">Successful Requests( Status -200 )</th>
          <th className="c-500">Failed Requests( Status -500 )</th>
          {stats.countOther && <th>Other</th>}
        </tr>
      </thead>
      <tbody>
        <tr key="1">
          <td>{stats.count200}</td>
          <td>{stats.count500}</td>
          {stats.countOther && <td>{stats.countOther}</td>}
        </tr>
      </tbody>
    </table>
  );
};

export default DataTable;
