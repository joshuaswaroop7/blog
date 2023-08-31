import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Apr from './Apr';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import App1 from './App1';
import App2 from './App2';
import Appr from './Appr';
//
import {createStore} from 'redux';
import {Provider} from 'react-redux'  //provider is used to send the react data to the enitre application, we should use this as a wrapper
//now the entire redux data  can be used in entire app 
import rootReducer from './Services/Reducers/indexr'
const store = createStore(rootReducer)
//console.warn('store data', store)
//
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>

    <App />
  
</Provider>, 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
