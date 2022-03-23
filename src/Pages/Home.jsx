import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import React from "react";
import {routerReducer} from "react-router-redux";
import UserContainer from "../components/Redux-thunk-axios/UserContainer";

function Home() {
    return(
        <div>
            <UserContainer/>
        </div>
    )

}