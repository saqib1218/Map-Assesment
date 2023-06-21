import React from "react";

import GeoChart from "./GeoChart";
import data from "./GeoChart.world.geo.json";
import "./App.css";

function App() {
  
  return (
    <React.Fragment>
      <GeoChart data={data} property={"pop_est"} />
    </React.Fragment>
  );
}

export default App;
