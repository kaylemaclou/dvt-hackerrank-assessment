import React from 'react';
import ReactDOM from 'react-dom';
import 'fontsource-roboto';

import App from './App';
import * as serviceWorker from './serviceWorker';

console.log('process.env.NODE_ENV');
console.log(process.env.NODE_ENV);
console.log('process.env.REACT_APP_DEEZER_API_BASE_URL');
console.log(process.env.REACT_APP_DEEZER_API_BASE_URL);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
