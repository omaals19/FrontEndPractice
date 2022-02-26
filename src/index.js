import React from "react";

import { Trying } from "./components/Trying";
import { Explanation } from "./components/Explanation";
import { Menu } from "./components/Menu";
import { HashRouter, Routes, Route } from "react-router-dom";
import * as ReactDOM from "react-dom";
import "./index.css";

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
          <Route path="/" exact element={<Menu />} />
        </Routes>
      </div>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
