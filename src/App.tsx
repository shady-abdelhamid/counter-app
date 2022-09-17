import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="container h-100 text-center">
      <div className="row h-100 justify-content-center align-items-center ">
        <Counter />
      </div>
    </div>
  );
}

export default App;
