import userReducer from "../../Reducers/userReducer";
import {combineReducers} from "redux";
import {counterReducer} from "../../Reducers";

const rootReducer = combineReducers({
    user: userReducer,
    counter: counterReducer
})

export default rootReducer

