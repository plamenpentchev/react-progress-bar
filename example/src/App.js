import React, { useState, useEffect } from "react";

import {ProgressBar} from "react-progress-bar";
import "react-progress-bar/dist/index.css";

const App = () => {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

  return (
    <div className="App">
      <ProgressBar bgcolor={"#6a1b9a"} completed={completed} width={"70%"}/>
    </div>
  );
};

export default App;
