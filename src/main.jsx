import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Root from "./root/Root.jsx";
import {BrowserRouter} from "react-router-dom";
import {applyMiddleware, compose, legacy_createStore as createStore,} from "redux";
import {rootReducer} from "./redux/reducers/rootReducer.js";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import ScrollToTop from "./components/ScrollToTop/index.jsx";

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Provider store={store}>
          <ScrollToTop/>
          <Root/>
      </Provider>
  </BrowserRouter>
)
