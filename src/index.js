import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// Importamos componentes del core
import { Provider } from 'react-redux';
import store from './store/store';
// Importamos los estilo
import './index.scss';
// Importamos los componentes
import App from './components/App/App';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
