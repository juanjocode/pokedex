import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import './css/body.scss';
import {StateProvider} from './Providers/GlobalState';

ReactDOM.render(
  
    // <React.StrictMode>
      <StateProvider>
        <App />
      </StateProvider>,
    // </React.StrictMode>,

  document.getElementById('root')
);
