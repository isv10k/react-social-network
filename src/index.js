import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



import store from './redux/state'

export let renderAll = () => {
  // console.table(state.messagesPage.messages)
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} store={store} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
renderAll(store)
store.subscribe(renderAll);

