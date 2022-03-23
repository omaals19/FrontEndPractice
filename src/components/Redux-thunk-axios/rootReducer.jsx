import userReducer from "../../Reducers/userReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    user: userReducer
})

export default rootReducer

