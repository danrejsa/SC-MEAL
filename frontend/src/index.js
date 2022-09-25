import React from "react";
import ReactDom from "react-dom";
import { Provider } from 'react-redux';
import {applyMiddleware, compose} from 'redux';
import { legacy_createStore as createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import './index.css';
import Router from "./components/router";
import App from "./app";
 
const store =  createStore(reducers, compose(applyMiddleware(thunk)))

ReactDom.render(
    <Provider store={store}>
        <App />
      
   </Provider>
     ,document.getElementById('root'));
