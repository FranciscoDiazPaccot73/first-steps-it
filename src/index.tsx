import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import PageProvider from './context/index';

ReactDOM.render(
  <PageProvider>
    <App />
  </PageProvider>,
  document.getElementById('root')
);
