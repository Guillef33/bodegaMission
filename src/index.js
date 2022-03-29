import React from 'react';
import ReactDOM from 'react-dom';
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
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(<App />, rootElement);
}
