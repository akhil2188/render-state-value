import React from "react";
import StateValue from "./components/FunctionalComponent";
import ImageScanContainer from "./components/ClassComponent";

function App() {
  return (
    <div className="App">
      <div className="classComponent">
        <ImageScanContainer />
      </div>
      <div className="functionalComponent">
        <StateValue />
      </div>
    </div>
  );
}

export default App;
