/* eslint-disable no-undef */
import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const [def, setDef] = React.useState("fss");
  React.useEffect(() => {
    EventController.set({
      name: "test",
      handle: () => {
        document.getElementById("show_element").innerText = def;
      },
    });
    EventController.set({
      name: "test-params",
      handle: (params) => {
        document.getElementById("show_element").innerHTML = params;
        // const req = JSON.parse(params);
        // document.getElementById("show_element").innerText = req;
      },
    });
  }, [def]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id="show_element">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick={() => {
            setDef("hello");
          }}
          style={{
            padding: 10,
          }}>
          Click Me!!
        </button>
      </header>
    </div>
  );
}

export default App;
