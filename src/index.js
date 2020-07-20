import React from 'react';
import ReactDOM from 'react-dom';
// Importamos componentes del core
import { Provider } from 'react-redux';
import store from './store/store';

import './index.scss';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
