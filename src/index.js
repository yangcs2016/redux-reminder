import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css'
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger';
import rootReducer from './reducers'
const store=createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(logger)
    )    
)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
