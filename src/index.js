import React from "react";

import { Trying } from "./components/Trying";
import { Explanation } from "./components/Explanation";
import { Omar, Stream } from "./Pages";
import { Gps } from "./Pages";
import { Menu } from "./components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import { createStore } from "redux";
import { counterReducer, userReducer } from "./Reducers";
import store2 from "./Reducers/counterReducer";
import store1 from "./components/Redux-thunk-axios/store";
import UserContainer from "./components/Redux-thunk-axios/UserContainer";

console.log("here");

// export const store = createStore(userReducer);
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store1}>
        <Menu />
        <div
          style={{
            height: "100%",
            display: "grid",
            gridTemplateRows: "900px auto",
          }}
        >
          <Routes>
            <Route path="/" exact element={<div />} /> // pass page components
            // in element prop, i substituded it with div
            <Route path="/About_us" element={<UserContainer />} />
            <Route path="/Stream" element={<Stream />} />
            <Route path="/Gps" element={<Gps />} />
            <Route path="/Omar" element={<Omar />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
