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
        <Menu>
          <Routes>
            <Route path="/" exact element={<div />} /> // pass page components
            // in element prop, i substituded it with div
            <Route path="/About_us" element={<div />} />
            <Route path="/Stream" element={<div />} />
            <Route path="/Gps" element={<div />} />
          </Routes>
        </Menu>
      </div>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
