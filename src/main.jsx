import { Provider } from "react-redux";
import { store } from "./redux/store";

// import { StrictMode } from 'react'  // it's the same as import React from 'react'
// import { createRoot } from 'react-dom/client' // it's the same as import ReactDOM from 'react-dom/client'
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { FormProvider } from "./context/FormContext"; // ✅ import this

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
