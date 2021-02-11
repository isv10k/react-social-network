import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from './redux/redux-store'
import {BrowserRouter} from "react-router-dom";

export let renderAll = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>

                <App state={state}
                     dispatch={store.dispatch.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    )
}
renderAll(store.getState())
store.subscribe(() => {
    let state = store.getState()
    renderAll(state)
})

