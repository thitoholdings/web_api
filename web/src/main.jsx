import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ContextWrapper from "./context/ContextWrapper";
import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";

ReactDOM.render(
  <React.StrictMode>
    <ContextWrapper>
      <App />
    </ContextWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
