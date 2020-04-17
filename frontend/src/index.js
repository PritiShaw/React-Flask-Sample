import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyComponent from './MyComponent';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
  <MyComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
