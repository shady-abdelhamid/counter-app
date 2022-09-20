import React, { useState } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Counters from "./components/Counters";
import CounterContext from "./contexts/counterContext";
import { Counter } from "./models/counter";

function App() {
  const [counters, setCounters] = useState([
    { id: 0, count: 0 },
    { id: 1, count: 0 },
    { id: 2, count: 0 },
    { id: 3, count: 0 },
  ] as Array<Counter>);

  const handleCounters = (counters: Array<Counter>) => {
    setCounters(counters);
  };

  return (
    <CounterContext.Provider value={{
      counters,
      handleCounters,
      }}>
      <div className="container h-100 text-center">
        <div className="row h-100 justify-content-center align-items-center ">
          <Counters />
        </div>
      </div>
    </CounterContext.Provider>
  );
}

export default App;
