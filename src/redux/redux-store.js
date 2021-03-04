import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import {combineReducers, createStore} from "redux";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    messagesPage: messageReducer,
    profilePage: profileReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer
})

let store = createStore(reducers)

export default store