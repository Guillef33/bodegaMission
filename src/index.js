import React from 'react';
import { hydrate, render } from "react-dom";
import './index.scss';
import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <Provider> */}
//       <App />
//     {/* </Provider> */}
//   </React.StrictMode>,
//   document.getElementById("root")
// );


const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
