//entry

import React from "react";
import ReactDOM from "react-dom";
import store from "./store.js";
import { Provider } from "react-redux";

ReactDOM.render(
    <div>Hello... its me...</div>,
    document.getElementById("app")
)

// import { Provider } from 'react-redux';
// import store from './yourStore';

// ReactDOM.render(
//   <Provider store={store}>
//     {/* rest of your app goes here! */}
//   </Provider>,
//   document.getElementById('yourApp')
// );