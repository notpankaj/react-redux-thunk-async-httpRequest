import React from "react"
import reactDom from "react-dom"
import App from './App'
import {createStore, applyMiddleware} from 'redux'
import {Provider}  from 'react-redux'
import thunk  from 'redux-thunk'
import postReducer from "./reducer"
import { composeWithDevTools } from "redux-devtools-extension"

// -->without dev tools
// const store = createStore(postReducer,applyMiddleware(thunk));

// -->with dev tools
const store = createStore(
    postReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

reactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,document.getElementById('root')
)