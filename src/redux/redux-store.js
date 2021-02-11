import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import {combineReducers, createStore} from "redux";

let reducers = combineReducers({
    messagesPage: messageReducer,
    profilePage: profileReducer,
    sidebarPage: sidebarReducer
})

let store = createStore(reducers)

export default store