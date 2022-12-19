import React from "react";
import { hydrate, render } from "react-dom";
import "./index.scss";
import App from "./App";
import ReactDOM from "react-dom";
// import {
//   BrowserRouter,
//   Route,
//   Routes,
//   Link,
//   useLocation,
// } from "react-router-dom";

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
