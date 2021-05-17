import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { SwitchProvider } from './context';

ReactDOM.render(
  <SwitchProvider>
    <App />
  </SwitchProvider>,
  document.getElementById('root')
);
