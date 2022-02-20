import React from "react";
import { Explanation } from "./components/Explanation";
import { HashRouter, Routes, Route } from "react-router-dom";
import * as ReactDOM from "react-dom";

console.log("here");

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <div
        style={{
          position: "relative",
          height: "100%",
          display: "grid",
          gridTemplateRows: "900px auto",
        }}
      >
        <Routes>
          <Route path="/" exact element={<Explanation />} />
        </Routes>
      </div>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
