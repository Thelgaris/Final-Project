//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";
import reducers from "./reducers";
import { createStore } from "redux";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));

ReactDOM.render(
  <Provider
    store={createStore(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
