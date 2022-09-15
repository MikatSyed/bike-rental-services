import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import store from './Store'
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import './index.css'   
import { ThemeProvider } from "@material-tailwind/react";

const options = {
  timeout: 8000,
  position: positions.BOTTOM_CENTER, 
  transition: transitions.SCALE,
};

ReactDOM.render(
  <ThemeProvider>
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Provider>,
  </ThemeProvider>,
  document.getElementById("root")
);
 