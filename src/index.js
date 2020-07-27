import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import {StateProvider} from './Providers/GlobalState';
import { Provider } from 'react-redux';
import store from './Store/store';

ReactDOM.render(
  
    // <React.StrictMode>
    <Provider store={store}>
      <StateProvider>
        <App />
      </StateProvider>
    </Provider>,
    // </React.StrictMode>,

  document.getElementById('root')
);

