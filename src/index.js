import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./containers/App";
import mainStore from "./store";
import "antd/dist/antd.css";
import TableContainer from "./containers/TableContainer";

const store = mainStore();

//* Route TableContainer demo versija veliau istrinti //
render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,

    document.getElementById("app")
);
