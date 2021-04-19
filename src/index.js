import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { SwitchDayNightProvider } from './context';

ReactDOM.render(
  <SwitchDayNightProvider>
    <App />
  </SwitchDayNightProvider>,
  document.getElementById('root')
);
