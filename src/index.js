import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import JSApp from './App';
//import * as serviceWorker from './serviceWorker';


//addPost('Samurai');
//let rerenderEntireTree =(state) => {
    ReactDOM.render(
        <JSApp />
        , document.getElementById('root')
    );
//}

//rerenderEntireTree(store.getState());

//store.subscribe(rerenderEntireTree);
