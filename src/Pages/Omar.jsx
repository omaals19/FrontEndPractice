import * as React from "react";
import { createStore } from "redux";
import { counterReducer } from "../Reducers";
import { Provider, useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../Actions";
// import { store } from "../index";
import { useState } from "react";

function Omar() {
  //  const counter = useSelector((state) => store.getState());
  //  const dispatch = useDispatch();
  //  const [count, setCount] = useState(0);
  //  return (
  //    <div>
  //      <h1>Redux Counter {counter}</h1>
  //      <button onClick={() => dispatch(increment())}> Redux +</button>
  //      <button onClick={() => dispatch(decrement())}>Redux -</button>
  //      <button onClick={() => setCount(count + 1)}> React State + </button>
  //      <button onClick={() => setCount(count - 1)}> React State - </button>
  //      <h1> React State Counter: {count} </h1>
  //    </div>
  //  );
}
export default Omar;
