import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ContextWrapper from "./context/ContextWrapper";
import { BrowserRouter } from "react-router-dom";
import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import { Provider } from "react-redux";

ReactDOM.render(
 
<React.StrictMode>

    <ContextWrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextWrapper>

</React.StrictMode>,
  document.getElementById("root")
);
