import 'bootstrap/dist/css/bootstrap.min.css';
import { config } from 'dotenv';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from "redux-thunk";
import App from './App';
import './index.css';
import reducers from "./reducers";
import * as serviceWorker from './serviceWorker';

config();


const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(reduxThunk),
  // other store enhancers if any
));

ReactDOM.render(
<Provider store={store}>
  <SnackbarProvider maxSnack={3}>
	  <App />
  </SnackbarProvider>
</Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
