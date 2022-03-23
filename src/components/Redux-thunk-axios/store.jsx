import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const store1 = createStore(rootReducer, compose(applyMiddleware(thunk)))
export default store1