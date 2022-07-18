import React from 'react';
import './index.css';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './App';
import reportWebVitals from './reportWebVitals';

//ReactDOM.render(<App />, document.getElementById('root'));

//const rootElement = ReactDOM.createRoot(document.getElementById("root"));
//const root = createRoot(rootElement);
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals();
