import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

//Components
import App from './App';

//Redux
import {Provider} from "react-redux";
import {appStore} from "./store/store.index";

// Stylesheets
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert} from "react-bootstrap";

ReactDOM.render(
  <React.StrictMode>
      <Provider  store={appStore}>
      <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
