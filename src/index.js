import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { SwitchProvider } from './context';
import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <SwitchProvider>
      <App />
    </SwitchProvider>
  </Provider>,
  document.getElementById('root')
);
