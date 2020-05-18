import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ActionCableProvider } from "react-actioncable-provider";
import App from "../containers/App";

import store from "../store";

const fullApp = (
  <ActionCableProvider url="ws://localhost:3000/cable">
    <App />
  </ActionCableProvider>
);

const root = document.createElement("div");
root.id = "root";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(fullApp, document.body.appendChild(root));
});
