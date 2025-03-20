import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Correct import for React 18
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";
import "./styles.css"; // Ensure styles.css exists

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Use createRoot()
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
