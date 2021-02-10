import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import store from './redux/state'

export let renderAll = () => {
    // console.table(state.messagesPage.messages)
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()}
                 addMessage={store.addMessage.bind(store)}
                 draftMessageUpdate={store.draftMessageUpdate.bind(store)}
                 addPost={store.addPost.bind(store)}
                 draftPostUpdate={store.draftPostUpdate.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderAll()
store.subscribe(renderAll);

