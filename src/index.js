import React from 'react';
import ReactDOM from 'react-dom/client';  // Import from 'react-dom/client' for React 18
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';

// Use ReactDOM.createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
