import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SamuraiJSApp from './App';
import * as serviceWorker from './serviceWorker';


//addPost('Samurai');
//let rerenderEntireTree =(state) => {
    ReactDOM.render(
        <SamuraiJSApp />
        , document.getElementById('root')
    );
//}

//rerenderEntireTree(store.getState());

//store.subscribe(rerenderEntireTree);
